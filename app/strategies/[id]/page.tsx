'use client'
import { useParams, useRouter } from 'next/navigation'
import { useStore } from '@/lib/store'
import { formatINR } from '@/lib/compute'
import { PortfolioFund, Strategy } from '@/lib/types'
import { ArrowLeft, Edit2, TrendingUp, RefreshCw, AlertTriangle } from 'lucide-react'
import { clsx } from 'clsx'

const SECTION_COLOR: Record<string, string> = {
  EQUITY: '#818cf8',
  DEBT: '#38bdf8',
  HYBRID: '#a78bfa',
}

function MetricCard({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111]">
      <p className="text-[10px] text-[#444] uppercase tracking-wider mb-1.5">{label}</p>
      <p className="text-[20px] font-semibold" style={{ color: color ?? '#f0f0f0' }}>{value}</p>
      {sub && <p className="text-[10px] text-[#444] mt-0.5">{sub}</p>}
    </div>
  )
}

function SectionBadge({ section }: { section: string }) {
  return (
    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ color: SECTION_COLOR[section], background: SECTION_COLOR[section] + '22' }}>
      {section}
    </span>
  )
}

function FundRow({ fund, rank }: { fund: PortfolioFund; rank: number }) {
  const returnColor = fund.return3y > 12 ? '#22c55e' : fund.return3y > 8 ? '#f59e0b' : '#ef4444'
  return (
    <tr className="border-b border-[#0f0f0f] hover:bg-[#121212] transition-colors">
      <td className="px-4 py-3 text-[12px] text-[#444]">{rank}</td>
      <td className="px-4 py-3">
        <p className="text-[12px] text-[#f0f0f0] font-medium">{fund.shortName}</p>
        <p className="text-[10px] text-[#444]">{fund.fundHouse}</p>
      </td>
      <td className="px-4 py-3 text-[11px] text-[#555]">{fund.subCategory}</td>
      <td className="px-4 py-3">
        <SectionBadge section={fund.section} />
      </td>
      <td className="px-4 py-3 text-[12px] text-[#22c55e] font-semibold">{fund.score.toFixed(0)}</td>
      <td className="px-4 py-3 text-[12px] text-[#f0f0f0]">{fund.targetWeight.toFixed(1)}%</td>
      <td className="px-4 py-3 text-[12px] text-[#f0f0f0] font-medium">{formatINR(fund.allocation)}</td>
      <td className="px-4 py-3 text-[12px]" style={{ color: returnColor }}>{fund.return3y.toFixed(1)}%</td>
      <td className="px-4 py-3 text-[12px] text-[#888]">{fund.sharpe3y.toFixed(2)}</td>
      <td className="px-4 py-3 text-[12px] text-[#555]">{fund.expenseRatio.toFixed(2)}%</td>
    </tr>
  )
}

function ConfigTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-[#444] uppercase tracking-wider">{label}</span>
      <span className="text-[11px] text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2a2a2a]">{value}</span>
    </div>
  )
}

function weightingLabel(method: string) {
  return { equal: 'Equal Weight', score: 'Score-Based', risk: 'Risk-Based', category: 'Category-Based' }[method] ?? method
}

function rebalancingLabel(s: Strategy) {
  const cfg = s.config.rebalancing
  if (cfg.trigger === 'time') return `Time · ${cfg.cadence ?? 'quarterly'}`
  if (cfg.trigger === 'drift') return `Drift · ${cfg.driftThreshold ?? 10}% threshold`
  return 'Manual'
}

export default function PortfolioViewerPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { getStrategy, deleteStrategy } = useStore()
  const strategy = getStrategy(id)

  if (!strategy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: 'var(--bg-base)' }}>
        <p className="text-[15px] text-[#555]">Strategy not found.</p>
        <button onClick={() => router.push('/strategies')} className="text-[13px] text-[#22c55e] hover:underline cursor-pointer">
          Back to My Strategies
        </button>
      </div>
    )
  }

  const funds = strategy.funds ?? []
  const sections = [...new Set(strategy.config.universes.map(u => u.section))]
  const universeLabels = strategy.config.universes.map(u => u.label)

  // Concentration warnings
  const maxWeight = Math.max(...funds.map(f => f.targetWeight))
  const highConcentration = maxWeight > 40
  const singleSector = sections.length === 1 && funds.length < 5

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Top nav */}
      <div className="border-b border-[#1f1f1f] px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/strategies')} className="flex items-center gap-1.5 text-[13px] text-[#555] hover:text-[#888] transition-colors cursor-pointer">
            <ArrowLeft size={14} /> Strategies
          </button>
          <span className="text-[#2a2a2a]">/</span>
          <span className="text-[13px] text-[#f0f0f0]">{strategy.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push('/strategies/new')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] text-[#888] border border-[#2a2a2a] rounded-lg hover:border-[#3a3a3a] hover:text-[#f0f0f0] transition-all cursor-pointer"
          >
            <Edit2 size={12} /> Edit Strategy
          </button>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] text-[#f0f0f0] border border-[#3a3a3a] rounded-lg hover:border-[#555] transition-all cursor-pointer"
          >
            <RefreshCw size={12} /> Rebalance
          </button>
          <button
            className="flex items-center gap-1.5 px-4 py-1.5 text-[12px] text-black font-semibold bg-[#22c55e] rounded-lg hover:bg-[#16a34a] transition-colors cursor-pointer"
          >
            <TrendingUp size={12} /> Invest Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header strip */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-[22px] font-bold text-[#f0f0f0] mb-1">{strategy.name}</h1>
            <div className="flex items-center gap-2 flex-wrap">
              {sections.map(s => <SectionBadge key={s} section={s} />)}
              {universeLabels.map(l => (
                <span key={l} className="text-[10px] text-[#555] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#2a2a2a]">{l}</span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-[#444]">Capital</p>
            <p className="text-[18px] font-bold text-[#f0f0f0]">{formatINR(strategy.capital ?? 0)}</p>
            <p className="text-[10px] text-[#444]">{funds.length} funds · Lumpsum</p>
          </div>
        </div>

        {/* Warnings */}
        {highConcentration && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#451a03] border border-[#92400e] mb-4">
            <AlertTriangle size={13} className="text-[#f59e0b] shrink-0" />
            <p className="text-[12px] text-[#f59e0b]">
              Highest allocation is {maxWeight.toFixed(1)}% — concentrated exposure to a single fund. Consider adding more funds or capping max weight.
            </p>
          </div>
        )}
        {singleSector && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] mb-4">
            <AlertTriangle size={13} className="text-[#555] shrink-0" />
            <p className="text-[12px] text-[#555]">Single-section portfolio with few funds — limited diversification.</p>
          </div>
        )}

        {/* Portfolio metrics */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          <MetricCard label="Wtd 3Y CAGR" value={`${(strategy.weightedCAGR3y ?? 0).toFixed(1)}%`} color="#22c55e" />
          <MetricCard label="Wtd Sharpe 3Y" value={(strategy.weightedSharpe3y ?? 0).toFixed(2)} color="#818cf8" />
          <MetricCard label="Wtd Exp Ratio" value={`${(strategy.weightedExpenseRatio ?? 0).toFixed(2)}%`} sub="lower is better" />
          <MetricCard label="Max Drawdown" value={`${(strategy.weightedMaxDrawdown ?? 0).toFixed(1)}%`} color="#f59e0b" sub="worst 3Y" />
          <MetricCard label="Portfolio Alpha" value={`${(strategy.portfolioAlpha ?? 0).toFixed(1)}%`} color={(strategy.portfolioAlpha ?? 0) > 0 ? '#22c55e' : '#ef4444'} sub="vs benchmark" />
          <MetricCard label="Residual Cash" value={formatINR(strategy.remainingCash ?? 0)} sub="uninvested" />
        </div>

        {/* Constituents table */}
        <div className="rounded-xl border border-[#2a2a2a] bg-[#111] overflow-hidden mb-6">
          <div className="px-4 py-3 border-b border-[#1f1f1f]">
            <p className="text-[12px] text-[#555]">Portfolio constituents — {funds.length} funds</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  {['#', 'Fund', 'Sub-Category', 'Section', 'Score', 'Weight', 'Allocation', '3Y CAGR', 'Sharpe 3Y', 'Exp Ratio'].map(h => (
                    <th key={h} className="px-4 py-2.5 text-left text-[10px] text-[#444] uppercase tracking-wider font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {funds.map((fund, i) => <FundRow key={fund.schemeCode} fund={fund} rank={i + 1} />)}
              </tbody>
              <tfoot>
                <tr className="bg-[#0d0d0d]">
                  <td colSpan={5} className="px-4 py-2.5 text-[11px] text-[#444]">Portfolio total</td>
                  <td className="px-4 py-2.5 text-[11px] text-[#f0f0f0] font-semibold">
                    {funds.reduce((a, f) => a + f.targetWeight, 0).toFixed(1)}%
                  </td>
                  <td className="px-4 py-2.5 text-[11px] text-[#f0f0f0] font-semibold">
                    {formatINR(funds.reduce((a, f) => a + f.allocation, 0))}
                  </td>
                  <td className="px-4 py-2.5 text-[11px] text-[#22c55e]">
                    {(strategy.weightedCAGR3y ?? 0).toFixed(1)}%
                  </td>
                  <td className="px-4 py-2.5 text-[11px] text-[#818cf8]">
                    {(strategy.weightedSharpe3y ?? 0).toFixed(2)}
                  </td>
                  <td className="px-4 py-2.5 text-[11px] text-[#555]">
                    {(strategy.weightedExpenseRatio ?? 0).toFixed(2)}%
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Strategy config + Diagnostics */}
        <div className="grid grid-cols-2 gap-4">
          {/* Config summary */}
          <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111]">
            <p className="text-[12px] text-[#888] font-medium mb-3">Strategy Configuration</p>
            <div className="space-y-2">
              <ConfigTag label="Weighting" value={weightingLabel(strategy.config.weighting.method)} />
              <ConfigTag label="Rebalancing" value={rebalancingLabel(strategy)} />
              <ConfigTag label="Filters" value={`${strategy.config.filters.length} conditions`} />
              <ConfigTag label="Ranking factors" value={
                strategy.config.rankingFactors.length === 0
                  ? 'None (alphabetical)'
                  : strategy.config.rankingFactors.map(f => f.metricLabel).join(', ')
              } />
              <ConfigTag label="Top N" value={`${strategy.topN ?? funds.length} funds selected`} />
              <ConfigTag label="Last run" value={new Date(strategy.lastRunAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} />
            </div>
          </div>

          {/* Section breakdown */}
          <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111]">
            <p className="text-[12px] text-[#888] font-medium mb-3">Section Breakdown</p>
            {sections.map(section => {
              const sectionFunds = funds.filter(f => f.section === section)
              const sectionWeight = sectionFunds.reduce((a, f) => a + f.targetWeight, 0)
              const sectionAlloc = sectionFunds.reduce((a, f) => a + f.allocation, 0)
              return (
                <div key={section} className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <SectionBadge section={section} />
                      <span className="text-[11px] text-[#555]">{sectionFunds.length} funds</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-[#f0f0f0]">{sectionWeight.toFixed(1)}%</span>
                      <span className="text-[11px] text-[#555]">{formatINR(sectionAlloc)}</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${sectionWeight}%`, background: SECTION_COLOR[section] }}
                    />
                  </div>
                </div>
              )
            })}

            <div className="mt-4 pt-3 border-t border-[#1a1a1a]">
              <p className="text-[11px] text-[#444] mb-2">Top holdings by weight</p>
              {[...funds].sort((a, b) => b.targetWeight - a.targetWeight).slice(0, 3).map((f, i) => (
                <div key={f.schemeCode} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#333]">{i + 1}</span>
                    <span className="text-[11px] text-[#888]">{f.shortName}</span>
                  </div>
                  <span className="text-[11px] text-[#f0f0f0]">{f.targetWeight.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delete / danger zone */}
        <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
          <p className="text-[11px] text-[#333]">Strategy ID: {strategy.id}</p>
          <button
            onClick={() => {
              deleteStrategy(strategy.id)
              router.push('/strategies')
            }}
            className="text-[12px] text-[#ef4444] hover:text-[#dc2626] cursor-pointer transition-colors"
          >
            Delete strategy
          </button>
        </div>
      </div>
    </div>
  )
}
