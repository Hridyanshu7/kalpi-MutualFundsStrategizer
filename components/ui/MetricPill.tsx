'use client'
import { clsx } from 'clsx'

type Props = { label: string; value: string | number; unit?: string; positive?: boolean; negative?: boolean; neutral?: boolean }

export function MetricPill({ label, value, unit = '', positive, negative, neutral }: Props) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[11px] text-[#555] uppercase tracking-wider">{label}</span>
      <span className={clsx(
        'text-sm font-semibold',
        positive ? 'text-[#22c55e]' : negative ? 'text-[#ef4444]' : 'text-[#f0f0f0]',
        neutral && 'text-[#888]'
      )}>
        {value}{unit}
      </span>
    </div>
  )
}
