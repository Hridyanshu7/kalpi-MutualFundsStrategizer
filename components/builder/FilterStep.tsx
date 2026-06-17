'use client'
import { useState } from 'react'
import { useStore } from '@/lib/store'
import { METRICS, FilterCondition, MetricDefinition } from '@/lib/types'
import { Button } from '@/components/ui/Button'
import { Plus, X, ChevronDown, AlertTriangle } from 'lucide-react'
import { clsx } from 'clsx'
import { MOCK_FUNDS } from '@/lib/mock-funds'

function countMatchingFunds(filters: FilterCondition[], selectedUniverses: { label: string }[]): number {
  const selectedSubCategories = selectedUniverses.map(u => u.label)
  let funds = MOCK_FUNDS.filter(f => selectedSubCategories.some(sc => f.subCategory === sc || f.subCategory.includes(sc)))
  for (const filter of filters) {
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
  return funds.length
}

const DEFAULT_FILTERS: FilterCondition[] = [
  { id: 'default_aum', metricId: 'aum', metricLabel: 'AUM', operator: 'gte', value: 500, unit: '₹Cr' },
  { id: 'default_age', metricId: 'fundAge', metricLabel: 'Fund Age', operator: 'gte', value: 3, unit: 'yrs' },
]

function FilterRow({ filter, onRemove, onChange }: {
  filter: FilterCondition
  onRemove: () => void
  onChange: (updated: FilterCondition) => void
}) {
  const opLabels: Record<string, string> = { gte: '≥', lte: '≤', between: 'between', eq: '=' }

  return (
    <div className="flex items-center gap-2 p-3 rounded-lg bg-[#141414] border border-[#2a2a2a] group">
      <div className="flex-1 flex items-center gap-2 flex-wrap">
        <span className="text-[13px] text-[#f0f0f0] font-medium min-w-[140px]">{filter.metricLabel}</span>
        <select
          value={filter.operator}
          onChange={e => onChange({ ...filter, operator: e.target.value as FilterCondition['operator'] })}
          className="bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] text-[#888] rounded px-2 py-1 outline-none cursor-pointer"
        >
          <option value="gte">≥ (at least)</option>
          <option value="lte">≤ (at most)</option>
          <option value="between">between</option>
        </select>
        {filter.operator === 'between' ? (
          <div className="flex items-center gap-1">
            <input
              type="number"
              value={(filter.value as number[])[0] ?? ''}
              onChange={e => onChange({ ...filter, value: [+e.target.value, (filter.value as number[])[1] ?? 0] })}
              className="w-20 bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] text-[#f0f0f0] rounded px-2 py-1 outline-none"
            />
            <span className="text-[12px] text-[#555]">and</span>
            <input
              type="number"
              value={(filter.value as number[])[1] ?? ''}
              onChange={e => onChange({ ...filter, value: [(filter.value as number[])[0] ?? 0, +e.target.value] })}
              className="w-20 bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] text-[#f0f0f0] rounded px-2 py-1 outline-none"
            />
          </div>
        ) : (
          <input
            type="number"
            value={filter.value as number}
            onChange={e => onChange({ ...filter, value: +e.target.value })}
            className="w-24 bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] text-[#f0f0f0] rounded px-2 py-1 outline-none"
          />
        )}
        <span className="text-[11px] text-[#555]">{filter.unit}</span>
      </div>
      <button onClick={onRemove} className="p-1 text-[#333] hover:text-[#ef4444] transition-colors cursor-pointer opacity-0 group-hover:opacity-100">
        <X size={13} />
      </button>
    </div>
  )
}

export function FilterStep() {
  const { builder, setFilters } = useStore()
  const [filters, setLocalFilters] = useState<FilterCondition[]>(
    builder.filters.length === 0 ? DEFAULT_FILTERS : builder.filters
  )
  const [showPicker, setShowPicker] = useState(false)
  const [search, setSearch] = useState('')

  const sections = builder.selectedUniverses.map(u => u.section)
  const applicableMetrics = METRICS.filter(m =>
    m.supportsFilter && sections.some(s => m.appliesTo.includes(s))
  )
  const l1Groups = [...new Set(applicableMetrics.map(m => m.l1))]
  const filtered = search
    ? applicableMetrics.filter(m => m.label.toLowerCase().includes(search.toLowerCase()))
    : applicableMetrics

  const matchCount = countMatchingFunds(filters, builder.selectedUniverses)

  function addFilter(metric: MetricDefinition) {
    const newFilter: FilterCondition = {
      id: `filter_${Date.now()}`,
      metricId: metric.id,
      metricLabel: metric.label,
      operator: 'gte',
      value: 0,
      unit: metric.unit,
    }
    const updated = [...filters, newFilter]
    setLocalFilters(updated)
    setFilters(updated)
    setShowPicker(false)
  }

  function updateFilter(id: string, updated: FilterCondition) {
    const next = filters.map(f => f.id === id ? updated : f)
    setLocalFilters(next)
    setFilters(next)
  }

  function removeFilter(id: string) {
    const next = filters.filter(f => f.id !== id)
    setLocalFilters(next)
    setFilters(next)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[18px] font-semibold text-[#f0f0f0] mb-1">Filter Funds</h2>
          <p className="text-[13px] text-[#555]">Set mandatory conditions. All filters use AND logic — a fund must pass every condition.</p>
        </div>
        <div className={clsx(
          'px-3 py-1.5 rounded-lg text-[12px] font-medium',
          matchCount === 0 ? 'bg-[#450a0a] text-[#ef4444]' :
          matchCount < 5 ? 'bg-[#451a03] text-[#f59e0b]' :
          'bg-[#0f2a1a] text-[#22c55e]'
        )}>
          {matchCount} funds match
        </div>
      </div>

      {/* Warning states */}
      {matchCount === 0 && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#450a0a] border border-[#7f1d1d] mb-4">
          <AlertTriangle size={14} className="text-[#ef4444] shrink-0" />
          <p className="text-[12px] text-[#ef4444]">No funds match your current filters. Consider loosening one or more conditions.</p>
        </div>
      )}
      {matchCount > 0 && matchCount < 5 && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#451a03] border border-[#92400e] mb-4">
          <AlertTriangle size={14} className="text-[#f59e0b] shrink-0" />
          <p className="text-[12px] text-[#f59e0b]">Only {matchCount} funds match — too few for meaningful ranking. Consider loosening filters.</p>
        </div>
      )}
      {filters.length >= 6 && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] mb-4">
          <AlertTriangle size={14} className="text-[#888] shrink-0" />
          <p className="text-[12px] text-[#555]">You have {filters.length} filters — a very narrow universe. Consider loosening some for better diversification.</p>
        </div>
      )}

      {/* Default filter note */}
      <div className="text-[11px] text-[#444] mb-4">
        ⓘ Default filters applied: AUM ≥ ₹500Cr, Fund Age ≥ 3 years. Edit or remove as needed.
      </div>

      {/* Active filters */}
      <div className="space-y-2 mb-4">
        {filters.map(f => (
          <FilterRow
            key={f.id}
            filter={f}
            onRemove={() => removeFilter(f.id)}
            onChange={updated => updateFilter(f.id, updated)}
          />
        ))}
      </div>

      {/* Add filter */}
      <div className="relative">
        <Button variant="secondary" size="sm" onClick={() => setShowPicker(!showPicker)}>
          <Plus size={13} /> Add Filter <ChevronDown size={12} />
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
              {(search ? [{ l1: 'Results', metrics: filtered }] : l1Groups.map(l1 => ({ l1, metrics: filtered.filter(m => m.l1 === l1) }))).map(group => (
                <div key={group.l1} className="mb-3">
                  <p className="text-[10px] text-[#444] uppercase tracking-widest px-2 mb-1">{group.l1}</p>
                  {group.metrics.map(m => (
                    <button
                      key={m.id}
                      onClick={() => addFilter(m)}
                      disabled={filters.some(f => f.metricId === m.id)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] text-[#f0f0f0]">{m.label}</span>
                        <span className="text-[11px] text-[#555]">{m.unit}</span>
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
