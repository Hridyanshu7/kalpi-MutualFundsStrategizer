'use client'
import { useState } from 'react'
import { useStore } from '@/lib/store'
import { WeightingConfig, WeightingMethod } from '@/lib/types'
import { clsx } from 'clsx'

const METHODS: { id: WeightingMethod; label: string; description: string }[] = [
  { id: 'equal', label: 'Equal Weight', description: 'Every fund in the basket receives an identical allocation — 1/N each. Simple, transparent, unbiased.' },
  { id: 'score', label: 'Score-Based', description: 'Funds receive weight proportional to their composite ranking score. Higher-ranked funds get more capital.' },
  { id: 'risk', label: 'Risk-Based', description: 'Funds receive weight inversely proportional to their risk (volatility). Lower-risk funds get more capital.' },
  { id: 'category', label: 'Category-Based', description: 'Set target allocations per section first (Equity / Debt / Hybrid), then distribute equally within each category.' },
]

export function WeightingStep() {
  const { builder, setWeighting } = useStore()
  const [config, setConfig] = useState<WeightingConfig>(builder.weighting)

  const sections = [...new Set(builder.selectedUniverses.map(u => u.section))]
  const hasMultipleSections = sections.length > 1

  function update(partial: Partial<WeightingConfig>) {
    const next = { ...config, ...partial }
    setConfig(next)
    setWeighting(next)
  }

  const catTotal = Object.values(config.categoryWeights ?? {}).reduce((a, b) => a + b, 0)

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#f0f0f0] mb-1">Weighting Method</h2>
        <p className="text-[13px] text-[#555]">Choose how capital is distributed across the funds in your basket.</p>
      </div>

      {/* Method selector */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {METHODS.map(m => {
          const disabled = m.id === 'category' && !hasMultipleSections
          const sel = config.method === m.id
          return (
            <button
              key={m.id}
              disabled={disabled}
              onClick={() => update({ method: m.id })}
              className={clsx(
                'text-left p-4 rounded-xl border transition-all cursor-pointer',
                sel ? 'border-[#22c55e] bg-[#0f2a1a]' : 'border-[#2a2a2a] bg-[#111] hover:border-[#3a3a3a]',
                disabled && 'opacity-30 cursor-not-allowed'
              )}
            >
              <p className={clsx('text-[13px] font-semibold mb-1', sel ? 'text-[#22c55e]' : 'text-[#f0f0f0]')}>{m.label}</p>
              <p className="text-[11px] text-[#555] leading-relaxed">{m.description}</p>
              {m.id === 'category' && !hasMultipleSections && (
                <p className="text-[10px] text-[#333] mt-1">Available only when multiple sections are selected</p>
              )}
            </button>
          )
        })}
      </div>

      {/* Method-specific options */}
      {config.method === 'score' && (
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111] mb-4">
          <p className="text-[12px] text-[#888] mb-3 font-medium">Score distribution</p>
          <div className="flex gap-3">
            {(['softmax', 'linear'] as const).map(d => (
              <button
                key={d}
                onClick={() => update({ scoreDistribution: d })}
                className={clsx(
                  'flex-1 py-2 rounded-lg text-[12px] border transition-colors cursor-pointer',
                  (config.scoreDistribution ?? 'softmax') === d
                    ? 'border-[#22c55e] text-[#22c55e] bg-[#0f2a1a]'
                    : 'border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]'
                )}
              >
                {d === 'softmax' ? 'Softmax (compressed)' : 'Linear (proportional)'}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-[#444] mt-2">Softmax compresses the spread — top fund doesn&apos;t dominate. Linear is direct proportion of score.</p>
        </div>
      )}

      {config.method === 'risk' && (
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111] mb-4">
          <p className="text-[12px] text-[#888] mb-3 font-medium">Risk metric to use for weighting</p>
          <div className="flex flex-col gap-2">
            {([
              { id: 'std_dev_3y', label: 'Std Deviation 3Y', desc: 'Most stable, widely used' },
              { id: 'max_drawdown_3y', label: 'Max Drawdown 3Y', desc: 'Focuses on worst-case loss' },
              { id: 'downside_deviation', label: 'Downside Deviation', desc: 'Only counts negative volatility' },
            ] as const).map(r => (
              <button
                key={r.id}
                onClick={() => update({ riskMetric: r.id })}
                className={clsx(
                  'text-left px-3 py-2 rounded-lg border text-[12px] transition-colors cursor-pointer',
                  (config.riskMetric ?? 'std_dev_3y') === r.id
                    ? 'border-[#22c55e] text-[#22c55e] bg-[#0f2a1a]'
                    : 'border-[#2a2a2a] text-[#555] hover:border-[#3a3a3a]'
                )}
              >
                <span className="font-medium">{r.label}</span>
                <span className="text-[#444] ml-2">— {r.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {config.method === 'category' && hasMultipleSections && (
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111] mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] text-[#888] font-medium">Section allocation</p>
            <span className={clsx('text-[12px] font-semibold', Math.abs(catTotal - 100) < 2 ? 'text-[#22c55e]' : 'text-[#f59e0b]')}>
              {catTotal}% total
            </span>
          </div>
          <div className="space-y-3">
            {sections.map(s => (
              <div key={s} className="flex items-center gap-3">
                <span className="text-[12px] text-[#f0f0f0] w-20">{s}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={config.categoryWeights?.[s] ?? Math.floor(100 / sections.length)}
                  onChange={e => update({ categoryWeights: { ...config.categoryWeights, [s]: +e.target.value } })}
                  className="flex-1 h-1 accent-[#22c55e] cursor-pointer"
                />
                <span className="text-[12px] text-[#22c55e] w-10 text-right">
                  {config.categoryWeights?.[s] ?? Math.floor(100 / sections.length)}%
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#444] mt-3">Within each section, funds are distributed equally.</p>
        </div>
      )}

      {/* Concentration limits */}
      <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111]">
        <p className="text-[12px] text-[#888] font-medium mb-1">Concentration limits <span className="text-[#444] font-normal">(optional)</span></p>
        <p className="text-[11px] text-[#444] mb-3">Leave blank for no limits. These are informational guardrails — the system will notify but not block.</p>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-[11px] text-[#555] mb-1 block">Max weight per fund</label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                placeholder="e.g. 30"
                value={config.maxFundWeight ?? ''}
                onChange={e => update({ maxFundWeight: e.target.value ? +e.target.value : undefined })}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] text-[#f0f0f0] rounded px-2 py-1.5 outline-none"
              />
              <span className="text-[12px] text-[#555]">%</span>
            </div>
          </div>
          <div className="flex-1">
            <label className="text-[11px] text-[#555] mb-1 block">Min weight per fund</label>
            <div className="flex items-center gap-1">
              <input
                type="number"
                placeholder="e.g. 3"
                value={config.minFundWeight ?? ''}
                onChange={e => update({ minFundWeight: e.target.value ? +e.target.value : undefined })}
                className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[12px] text-[#f0f0f0] rounded px-2 py-1.5 outline-none"
              />
              <span className="text-[12px] text-[#555]">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
