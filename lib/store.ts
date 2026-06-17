'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import {
  BuilderStep, FilterCondition, Fund, PortfolioFund,
  RankingFactor, RebalancingConfig, Strategy, StrategyConfig,
  Universe, WeightingConfig,
} from './types'
import { MOCK_FUNDS } from './mock-funds'
import { computeScores, applyWeighting } from './compute'

type BuilderState = {
  currentStep: BuilderStep
  name: string
  selectedUniverses: Universe[]
  filters: FilterCondition[]
  rankingFactors: RankingFactor[]
  weighting: WeightingConfig
  rebalancing: RebalancingConfig
  capital: number
  topN: number
  filteredFunds: Fund[]
  rankedFunds: Fund[]
  portfolioFunds: PortfolioFund[]
}

type StoreState = {
  strategies: Strategy[]
  builder: BuilderState
  // Actions
  setBuilderStep: (step: BuilderStep) => void
  setBuilderName: (name: string) => void
  setSelectedUniverses: (universes: Universe[]) => void
  setFilters: (filters: FilterCondition[]) => void
  setRankingFactors: (factors: RankingFactor[]) => void
  setWeighting: (config: WeightingConfig) => void
  setRebalancing: (config: RebalancingConfig) => void
  setCapital: (capital: number) => void
  setTopN: (n: number) => void
  computeFilteredFunds: () => void
  computeRankedFunds: () => void
  computePortfolio: () => void
  saveStrategy: () => string
  resetBuilder: () => void
  deleteStrategy: (id: string) => void
  getStrategy: (id: string) => Strategy | undefined
}

const DEFAULT_BUILDER: BuilderState = {
  currentStep: 'universe',
  name: '',
  selectedUniverses: [],
  filters: [],
  rankingFactors: [],
  weighting: { method: 'equal' },
  rebalancing: { trigger: 'manual' },
  capital: 100000,
  topN: 8,
  filteredFunds: [],
  rankedFunds: [],
  portfolioFunds: [],
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      strategies: [],
      builder: DEFAULT_BUILDER,

      setBuilderStep: (step) => set((s) => ({ builder: { ...s.builder, currentStep: step } })),
      setBuilderName: (name) => set((s) => ({ builder: { ...s.builder, name } })),
      setSelectedUniverses: (universes) => set((s) => ({ builder: { ...s.builder, selectedUniverses: universes } })),
      setFilters: (filters) => set((s) => ({ builder: { ...s.builder, filters } })),
      setRankingFactors: (factors) => set((s) => ({ builder: { ...s.builder, rankingFactors: factors } })),
      setWeighting: (config) => set((s) => ({ builder: { ...s.builder, weighting: config } })),
      setRebalancing: (config) => set((s) => ({ builder: { ...s.builder, rebalancing: config } })),
      setCapital: (capital) => set((s) => ({ builder: { ...s.builder, capital } })),
      setTopN: (topN) => set((s) => ({ builder: { ...s.builder, topN } })),

      computeFilteredFunds: () => {
        const { builder } = get()
        const selectedSubCategories = builder.selectedUniverses.map(u => u.label)
        let funds = MOCK_FUNDS.filter(f =>
          selectedSubCategories.some(sc => f.subCategory === sc || f.subCategory.includes(sc))
        )
        // Apply filters
        for (const filter of builder.filters) {
          funds = funds.filter(f => {
            const val = (f as Record<string, unknown>)[filter.metricId] as number
            if (val === undefined || val === null) return true
            if (filter.operator === 'gte') return val >= (filter.value as number)
            if (filter.operator === 'lte') return val <= (filter.value as number)
            if (filter.operator === 'between') {
              const [min, max] = filter.value as number[]
              return val >= min && val <= max
            }
            return true
          })
        }
        set((s) => ({ builder: { ...s.builder, filteredFunds: funds } }))
      },

      computeRankedFunds: () => {
        const { builder } = get()
        const scored = computeScores(builder.filteredFunds, builder.rankingFactors)
        set((s) => ({ builder: { ...s.builder, rankedFunds: scored } }))
      },

      computePortfolio: () => {
        const { builder } = get()
        const topFunds = builder.rankedFunds.slice(0, builder.topN)
        const portfolio = applyWeighting(topFunds, builder.weighting, builder.capital)
        set((s) => ({ builder: { ...s.builder, portfolioFunds: portfolio } }))
      },

      saveStrategy: () => {
        const { builder } = get()
        const id = `strategy_${Date.now()}`
        const config: StrategyConfig = {
          universes: builder.selectedUniverses,
          filters: builder.filters,
          rankingFactors: builder.rankingFactors,
          weighting: builder.weighting,
          rebalancing: builder.rebalancing,
        }
        const funds = builder.portfolioFunds
        const weightedCAGR3y = funds.reduce((acc, f) => acc + (f.return3y * f.targetWeight) / 100, 0)
        const weightedSharpe3y = funds.reduce((acc, f) => acc + (f.sharpe3y * f.targetWeight) / 100, 0)
        const weightedExpenseRatio = funds.reduce((acc, f) => acc + (f.expenseRatio * f.targetWeight) / 100, 0)
        const weightedMaxDrawdown = funds.reduce((acc, f) => acc + (f.maxDrawdown3y * f.targetWeight) / 100, 0)
        const portfolioAlpha = funds.reduce((acc, f) => acc + (f.alpha3y * f.targetWeight) / 100, 0)
        const totalAllocated = funds.reduce((acc, f) => acc + f.allocation, 0)

        const strategy: Strategy = {
          id,
          name: builder.name || 'Untitled Strategy',
          status: 'draft',
          config,
          lastRunAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          capital: builder.capital,
          topN: builder.topN,
          funds,
          weightedCAGR3y,
          weightedSharpe3y,
          weightedExpenseRatio,
          weightedMaxDrawdown,
          portfolioAlpha,
          remainingCash: builder.capital - totalAllocated,
        }
        set((s) => ({ strategies: [...s.strategies, strategy] }))
        return id
      },

      resetBuilder: () => set({ builder: DEFAULT_BUILDER }),

      deleteStrategy: (id) =>
        set((s) => ({ strategies: s.strategies.filter(st => st.id !== id) })),

      getStrategy: (id) => get().strategies.find(s => s.id === id),
    }),
    { name: 'kalpi-mf-store' }
  )
)
