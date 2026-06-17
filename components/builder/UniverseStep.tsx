'use client'
import { useStore } from '@/lib/store'
import { UNIVERSES, Universe, FundSection } from '@/lib/types'
import { clsx } from 'clsx'
import { Check } from 'lucide-react'

const SECTIONS: { id: FundSection; label: string; color: string; bg: string }[] = [
  { id: 'EQUITY', label: 'Equity', color: '#818cf8', bg: '#16213e' },
  { id: 'DEBT', label: 'Debt', color: '#38bdf8', bg: '#0f3460' },
  { id: 'HYBRID', label: 'Hybrid', color: '#a78bfa', bg: '#1a1a2e' },
]

export function UniverseStep() {
  const { builder, setSelectedUniverses } = useStore()
  const selected = builder.selectedUniverses

  function toggle(universe: Universe) {
    const exists = selected.find(u => u.id === universe.id)
    if (exists) setSelectedUniverses(selected.filter(u => u.id !== universe.id))
    else setSelectedUniverses([...selected, universe])
  }

  const isSelected = (id: string) => selected.some(u => u.id === id)

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#f0f0f0] mb-1">Select Universe</h2>
        <p className="text-[13px] text-[#555]">Choose which fund categories your strategy will search across. Pick one or more.</p>
      </div>

      <div className="space-y-6">
        {SECTIONS.map(section => {
          const sectionUniverses = UNIVERSES.filter(u => u.section === section.id)
          return (
            <div key={section.id}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: section.color }}>
                  {section.label}
                </span>
                <div className="flex-1 h-px bg-[#1a1a1a]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {sectionUniverses.map(u => {
                  const sel = isSelected(u.id)
                  return (
                    <button
                      key={u.id}
                      onClick={() => toggle(u)}
                      className={clsx(
                        'text-left p-4 rounded-xl border transition-all cursor-pointer',
                        sel
                          ? 'border-[#22c55e] bg-[#0f2a1a]'
                          : 'border-[#2a2a2a] bg-[#111] hover:border-[#3a3a3a] hover:bg-[#131313]'
                      )}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={clsx('text-[13px] font-semibold', sel ? 'text-[#22c55e]' : 'text-[#f0f0f0]')}>
                          {u.label}
                        </span>
                        {sel && (
                          <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                            <Check size={10} className="text-black" />
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-[#555] leading-relaxed">{u.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {selected.length > 0 && (
        <div className="mt-6 p-3 rounded-lg bg-[#0f2a1a] border border-[#1a4a2a]">
          <p className="text-[12px] text-[#22c55e]">
            {selected.length} universe{selected.length > 1 ? 's' : ''} selected — {selected.map(u => u.label).join(', ')}
          </p>
        </div>
      )}
    </div>
  )
}
