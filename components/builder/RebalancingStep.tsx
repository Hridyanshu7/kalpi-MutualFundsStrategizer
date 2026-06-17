'use client'
import { useState } from 'react'
import { useStore } from '@/lib/store'
import { RebalancingConfig } from '@/lib/types'
import { clsx } from 'clsx'
import { Info } from 'lucide-react'

const TRIGGERS = [
  { id: 'time', label: 'Time-Based', description: 'Rebalance on a fixed schedule — monthly, quarterly, or annually.' },
  { id: 'drift', label: 'Drift-Based', description: 'Rebalance when any fund\'s weight drifts beyond a set threshold from its target.' },
  { id: 'manual', label: 'Manual', description: 'No automatic trigger. Rebalance only when you initiate it yourself.' },
] as const

const CADENCES = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly' },
  { id: 'semi_annual', label: 'Semi-Annual' },
  { id: 'annual', label: 'Annual' },
] as const

export function RebalancingStep() {
  const { builder, setRebalancing } = useStore()
  const [config, setConfig] = useState<RebalancingConfig>(builder.rebalancing)

  function update(partial: Partial<RebalancingConfig>) {
    const next = { ...config, ...partial }
    setConfig(next)
    setRebalancing(next)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#f0f0f0] mb-1">Rebalancing</h2>
        <p className="text-[13px] text-[#555]">Define when and how your portfolio should be re-aligned to its target weights.</p>
      </div>

      {/* Trigger selector */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {TRIGGERS.map(t => {
          const sel = config.trigger === t.id
          return (
            <button
              key={t.id}
              onClick={() => update({ trigger: t.id })}
              className={clsx(
                'text-left p-4 rounded-xl border transition-all cursor-pointer',
                sel ? 'border-[#22c55e] bg-[#0f2a1a]' : 'border-[#2a2a2a] bg-[#111] hover:border-[#3a3a3a]'
              )}
            >
              <p className={clsx('text-[13px] font-semibold mb-1', sel ? 'text-[#22c55e]' : 'text-[#f0f0f0]')}>{t.label}</p>
              <p className="text-[11px] text-[#555] leading-relaxed">{t.description}</p>
            </button>
          )
        })}
      </div>

      {/* Time-based: cadence */}
      {config.trigger === 'time' && (
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111] mb-4">
          <p className="text-[12px] text-[#888] font-medium mb-3">Rebalancing cadence</p>
          <div className="flex gap-2 flex-wrap">
            {CADENCES.map(c => (
              <button
                key={c.id}
                onClick={() => update({ cadence: c.id })}
                className={clsx(
                  'px-4 py-2 rounded-lg text-[12px] border transition-colors cursor-pointer',
                  config.cadence === c.id
                    ? 'border-[#22c55e] text-[#22c55e] bg-[#0f2a1a]'
                    : 'border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]'
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Drift-based: threshold */}
      {config.trigger === 'drift' && (
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111] mb-4">
          <p className="text-[12px] text-[#888] font-medium mb-3">Drift threshold</p>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={3}
              max={25}
              step={1}
              value={config.driftThreshold ?? 10}
              onChange={e => update({ driftThreshold: +e.target.value })}
              className="flex-1 h-1 accent-[#22c55e] cursor-pointer"
            />
            <div className="flex items-center gap-1 w-20">
              <input
                type="number"
                min={3}
                max={25}
                value={config.driftThreshold ?? 10}
                onChange={e => update({ driftThreshold: +e.target.value })}
                className="w-14 bg-[#1a1a1a] border border-[#2a2a2a] text-[14px] font-semibold text-[#22c55e] rounded px-2 py-1 outline-none text-center"
              />
              <span className="text-[12px] text-[#555]">%</span>
            </div>
          </div>
          <p className="text-[11px] text-[#444] mt-2">
            Rebalance when any fund's actual weight deviates by more than {config.driftThreshold ?? 10}% from its target.
          </p>
        </div>
      )}

      {/* Manual: just informational */}
      {config.trigger === 'manual' && (
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111] mb-4">
          <p className="text-[12px] text-[#555]">No scheduled trigger. You can initiate a rebalance anytime from the Portfolio screen.</p>
        </div>
      )}

      {/* Exit load note */}
      <div className="flex items-start gap-2.5 p-4 rounded-xl border border-[#1f2a1a] bg-[#0d1a10]">
        <Info size={14} className="text-[#4ade80] mt-0.5 shrink-0" />
        <div>
          <p className="text-[12px] text-[#4ade80] font-medium mb-1">Exit Load Consideration</p>
          <p className="text-[11px] text-[#3a7a4a] leading-relaxed">
            Most equity mutual funds charge an exit load of 1% if redeemed within 12 months.
            Frequent rebalancing in time-based or tight drift modes may incur these charges —
            quarterly or wider intervals are generally more cost-efficient.
          </p>
        </div>
      </div>
    </div>
  )
}
