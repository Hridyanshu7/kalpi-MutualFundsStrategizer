'use client'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Plus, TrendingUp, BarChart2, RefreshCw, Trash2, ChevronRight } from 'lucide-react'
import { Strategy } from '@/lib/types'

function sectionColor(section: string) {
  if (section === 'EQUITY') return 'bg-[#16213e] text-[#818cf8]'
  if (section === 'DEBT') return 'bg-[#0f3460] text-[#38bdf8]'
  return 'bg-[#1a1a2e] text-[#a78bfa]'
}

function StrategyCard({ strategy, onOpen, onDelete }: { strategy: Strategy; onOpen: () => void; onDelete: () => void }) {
  const sections = [...new Set(strategy.config.universes.map(u => u.section))]
  const universeLabels = strategy.config.universes.map(u => u.label).join(', ')
  const weightingLabel = {
    equal: 'Equal Weight',
    score: 'Score-Based',
    risk: 'Risk-Based',
    category: 'Category-Based',
  }[strategy.config.weighting.method]

  const lastRun = new Date(strategy.lastRunAt)
  const now = new Date()
  const diffMs = now.getTime() - lastRun.getTime()
  const diffDays = Math.floor(diffMs / 86400000)
  const lastRunStr = diffDays === 0 ? 'Today' : diffDays === 1 ? 'Yesterday' : `${diffDays} days ago`

  return (
    <div
      className="rounded-xl border border-[#2a2a2a] bg-[#111] hover:border-[#3a3a3a] hover:bg-[#131313] transition-all cursor-pointer group"
      onClick={onOpen}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[15px] font-semibold text-[#f0f0f0] truncate">{strategy.name}</h3>
              <Badge
                label={strategy.status === 'invested' ? '● Invested' : '○ Draft'}
                variant={strategy.status === 'invested' ? 'green' : 'neutral'}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-1.5">
              {sections.map(s => (
                <span key={s} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${sectionColor(s)}`}>{s}</span>
              ))}
            </div>
            <p className="text-[12px] text-[#555] truncate">{universeLabels}</p>
          </div>
          <ChevronRight size={16} className="text-[#333] group-hover:text-[#888] mt-1 shrink-0 transition-colors" />
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-3 text-[11px] text-[#555] mb-4">
          <span>{strategy.topN ?? strategy.funds?.length ?? 0} funds</span>
          <span>·</span>
          <span>{weightingLabel}</span>
          <span>·</span>
          <span>Last run {lastRunStr}</span>
        </div>

        {/* Metrics */}
        {strategy.funds && strategy.funds.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#1f1f1f]">
            <div>
              <p className="text-[10px] text-[#444] uppercase tracking-wider mb-0.5">Wtd. 3Y CAGR</p>
              <p className="text-sm font-semibold text-[#22c55e]">
                {strategy.weightedCAGR3y?.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-[10px] text-[#444] uppercase tracking-wider mb-0.5">Sharpe 3Y</p>
              <p className="text-sm font-semibold text-[#f0f0f0]">
                {strategy.weightedSharpe3y?.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-[#444] uppercase tracking-wider mb-0.5">Exp. Ratio</p>
              <p className="text-sm font-semibold text-[#f59e0b]">
                {strategy.weightedExpenseRatio?.toFixed(2)}%
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-[#1a1a1a]">
        <div className="flex items-center gap-1">
          <button
            onClick={e => { e.stopPropagation(); onDelete() }}
            className="p-1.5 rounded text-[#333] hover:text-[#ef4444] hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            <Trash2 size={13} />
          </button>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onOpen() }}
          className="flex items-center gap-1 text-[11px] text-[#555] hover:text-[#22c55e] transition-colors cursor-pointer"
        >
          <RefreshCw size={11} /> View strategy
        </button>
      </div>
    </div>
  )
}

const FILTER_TABS = ['All', 'EQUITY', 'DEBT', 'HYBRID', 'Invested'] as const
type FilterTab = typeof FILTER_TABS[number]

export default function StrategiesPage() {
  const router = useRouter()
  const { strategies, deleteStrategy, resetBuilder } = useStore()
  const [activeTab, setActiveTab] = useState<FilterTab>('All')

  const filtered = strategies.filter(s => {
    if (activeTab === 'All') return true
    if (activeTab === 'Invested') return s.status === 'invested'
    return s.config.universes.some(u => u.section === activeTab)
  })

  function handleNew() {
    resetBuilder()
    router.push('/strategies/new')
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Top nav */}
      <div className="border-b border-[#1f1f1f] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart2 size={18} className="text-[#22c55e]" />
          <span className="text-[15px] font-semibold text-[#f0f0f0]">Kalpi</span>
          <span className="text-[#333] mx-1">/</span>
          <span className="text-[14px] text-[#888]">MF Strategies</span>
        </div>
        <Button variant="primary" size="md" onClick={handleNew}>
          <Plus size={14} /> New Strategy
        </Button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-[22px] font-semibold text-[#f0f0f0] mb-1">My Strategies</h1>
          <p className="text-[13px] text-[#555]">Systematic mutual fund portfolios built on rules, not guesswork.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 mb-6 border-b border-[#1f1f1f] pb-0">
          {FILTER_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-[13px] font-medium border-b-2 -mb-px transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'border-[#22c55e] text-[#22c55e]'
                  : 'border-transparent text-[#555] hover:text-[#888]'
              }`}
            >
              {tab}
              {tab !== 'All' && tab !== 'Invested' && (
                <span className="ml-1.5 text-[10px] text-[#333]">
                  ({strategies.filter(s => s.config.universes.some(u => u.section === tab)).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Strategy grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
              <TrendingUp size={20} className="text-[#333]" />
            </div>
            <div className="text-center">
              <p className="text-[14px] text-[#555] mb-1">No strategies yet</p>
              <p className="text-[12px] text-[#333]">Build your first systematic MF portfolio</p>
            </div>
            <Button variant="primary" size="md" onClick={handleNew}>
              <Plus size={14} /> Create Strategy
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(s => (
              <StrategyCard
                key={s.id}
                strategy={s}
                onOpen={() => router.push(`/strategies/${s.id}`)}
                onDelete={() => deleteStrategy(s.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Need useState import
import { useState } from 'react'
