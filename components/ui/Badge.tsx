'use client'
import { clsx } from 'clsx'

type Props = { label: string; variant?: 'green' | 'blue' | 'amber' | 'red' | 'neutral' | 'section'; className?: string }

const variants = {
  green: 'bg-[#166534] text-[#22c55e]',
  blue: 'bg-[#1e3a5f] text-[#3b82f6]',
  amber: 'bg-[#451a03] text-[#f59e0b]',
  red: 'bg-[#450a0a] text-[#ef4444]',
  neutral: 'bg-[#1f1f1f] text-[#888]',
  section: 'bg-[#1a1a2e] text-[#818cf8]',
}

export function Badge({ label, variant = 'neutral', className }: Props) {
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium tracking-wide', variants[variant], className)}>
      {label}
    </span>
  )
}
