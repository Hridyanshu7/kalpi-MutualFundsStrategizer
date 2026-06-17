'use client'
import { useState } from 'react'
import { useStore } from '@/lib/store'
import { METRICS, RankingFactor, MetricDefinition } from '@/lib/types'
import { Button } from '@/components/ui/Button'
import { Plus, X, GripVertical } from 'lucide-react'

export function RankingStep() {
  const { builder, setRankingFactors } = useStore()
  const [factors, setFactors] = useState<RankingFactor[]>(builder.rankingFactors)
  const [showPicker, setShowPicker] = useState(false)
  const [search, setSearch] = useState('')

  const sections = builder.selectedUniverses.map(u => u.section)
  const rankMetrics = METRICS.filter(m =>
    m.supportsRank && sections.some(s => m.appliesTo.includes(s))
  )
  const filtered = search ? rankMetrics.filter(m => m.label.toLowerCase().includes(search.toLowerCase())) : rankMetrics
  const l1Groups = [...new Set(rankMetrics.map(m => m.l1))]

  function addFactor(metric: MetricDefinition) {
    const equalWeight = Math.floor(100 / (factors.length + 1))
    const newFactor: RankingFactor = {
      metricId: metric.id,
      metricLabel: metric.label,
      direction: metric.direction,
      weight: equalWeight,
    }
    const updated = [...factors.map(f => ({ ...f, weight: equalWeight })), newFactor]
    // Normalise to 100
    const total = updated.reduce((s, f) => s + f.weight, 0)
    const normalised = updated.map((f, i) => ({
      ...f,
      weight: i === updated.length - 1 ? 100 - Math.round(equalWeight * (updated.length - 1)) : equalWeight
    }))
    setFactors(normalised)
    setRankingFactors(normalised)
    setShowPicker(false)
  }

  function removeFactor(metricId: string) {
    const updated = factors.filter(f => f.metricId !== metricId)
    if (updated.length > 0) {
      const equal = Math.floor(100 / updated.length)
      const normalised = updated.map((f, i) => ({
        ...f,
        weight: i === updated.length - 1 ? 100 - equal * (updated.length - 1) : equal
      }))
      setFactors(normalised)
      setRankingFactors(normalised)
    } else {
      setFactors([])
      setRankingFactors([])
    }
  }

  function updateWeight(metricId: string, weight: number) {
    const updated = factors.map(f => f.metricId === metricId ? { ...f, weight } : f)
    setFactors(updated)
    setRankingFactors(updated)
  }

  const totalWeight = factors.reduce((s, f) => s + f.weight, 0)

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#f0f0f0] mb-1">Rank & Score</h2>
        <p className="text-[13px] text-[#555]">
          Choose metrics to rank filtered funds. Each fund gets a 0–100 percentile score per metric.
          The weighted sum becomes the composite score used for ranking.
        </p>
      </div>

      {factors.length === 0 ? (
        <div className="p-6 rounded-xl border border-dashed border-[#2a2a2a] text-center mb-4">
          <p className="text-[13px] text-[#555] mb-1">No ranking factors yet</p>
          <p className="text-[11px] text-[#333]">Without ranking, funds will be ordered alphabetically. Add factors to score them systematically.</p>
        </div>
      ) : (
        <div className="space-y-2 mb-4">
          {factors.map(f => (
            <div key={f.metricId} className="flex items-center gap-3 p-3 rounded-lg bg-[#141414] border border-[#2a2a2a] group">
              <GripVertical size={14} className="text-[#333] shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[13px] text-[#f0f0f0] font-medium">{f.metricLabel}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    f.direction === 'higher_better'
                      ? 'bg-[#0f2a1a] text-[#22c55e]'
                      : 'bg-[#1a1a1a] text-[#888]'
                  }`}>
                    {f.direction === 'higher_better' ? '↑ Higher better' : '↓ Lower better'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={5}
                    max={90}
                    value={f.weight}
                    onChange={e => updateWeight(f.metricId, +e.target.value)}
                    className="flex-1 h-1 accent-[#22c55e] cursor-pointer"
                  />
                  <span className="text-[12px] text-[#22c55e] font-semibold w-10 text-right">{f.weight}%</span>
                </div>
              </div>
              <button onClick={() => removeFactor(f.metricId)} className="p-1 text-[#333] hover:text-[#ef4444] cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                <X size={13} />
              </button>
            </div>
          ))}

          {/* Weight total indicator */}
          <div className="flex items-center justify-between px-1 pt-1">
            <span className="text-[11px] text-[#444]">Total weight</span>
            <span className={`text-[12px] font-semibold ${Math.abs(totalWeight - 100) < 5 ? 'text-[#22c55e]' : 'text-[#f59e0b]'}`}>
              {totalWeight}% {Math.abs(totalWeight - 100) >= 5 && '(adjust to ~100%)'}
            </span>
          </div>
        </div>
      )}

      {/* Info box */}
      <div className="p-3 rounded-lg bg-[#141414] border border-[#1f1f1f] text-[11px] text-[#444] mb-4">
        ⓘ Each metric is normalised to a 0–100 percentile rank across your filtered fund pool before scoring.
        Higher score = better rank. Direction is pre-set per metric.
      </div>

      {/* Add factor picker */}
      <div className="relative">
        <Button variant="secondary" size="sm" onClick={() => setShowPicker(!showPicker)}>
          <Plus size={13} /> Add Ranking Factor
        </Button>

        {showPicker && (
          <div className="absolute top-9 left-0 z-50 w-[480px] bg-[#111] border border-[#2a2a2a] rounded-xl shadow-xl overflow-hidden">
            <div className="p-3 border-b border-[#1f1f1f]">
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search metrics..."
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[13px] text-[#f0f0f0] rounded-lg px-3 py-2 outline-none placeholder:text-[#444]"
              />
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {(search
                ? [{ l1: 'Results', metrics: filtered }]
                : l1Groups.map(l1 => ({ l1, metrics: filtered.filter(m => m.l1 === l1) }))
              ).map(group => (
                <div key={group.l1} className="mb-3">
                  <p className="text-[10px] text-[#444] uppercase tracking-widest px-2 mb-1">{group.l1}</p>
                  {group.metrics.map(m => (
                    <button
                      key={m.id}
                      onClick={() => addFactor(m)}
                      disabled={factors.some(f => f.metricId === m.id)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer disabled:opacity-30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] text-[#f0f0f0]">{m.label}</span>
                        <span className={`text-[10px] ${m.direction === 'higher_better' ? 'text-[#22c55e]' : 'text-[#888]'}`}>
                          {m.direction === 'higher_better' ? '↑' : '↓'} {m.unit}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#444] mt-0.5">{m.description}</p>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
