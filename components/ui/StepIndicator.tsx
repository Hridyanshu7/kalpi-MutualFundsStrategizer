'use client'
import { clsx } from 'clsx'
import { BUILDER_STEPS, BuilderStep } from '@/lib/types'
import { Check } from 'lucide-react'

type Props = { current: BuilderStep; completed: BuilderStep[] }

export function StepIndicator({ current, completed }: Props) {
  const currentIndex = BUILDER_STEPS.findIndex(s => s.id === current)
  return (
    <div className="flex items-center gap-0">
      {BUILDER_STEPS.map((step, i) => {
        const isDone = completed.includes(step.id)
        const isActive = step.id === current
        const isPast = i < currentIndex
        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div className={clsx(
                'w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all',
                isDone || isPast ? 'bg-[#22c55e] text-black' :
                isActive ? 'bg-[#1a1a1a] border-2 border-[#22c55e] text-[#22c55e]' :
                'bg-[#1a1a1a] border border-[#2a2a2a] text-[#555]'
              )}>
                {isDone || isPast ? <Check size={12} /> : i + 1}
              </div>
              <span className={clsx(
                'text-[10px] whitespace-nowrap font-medium',
                isActive ? 'text-[#f0f0f0]' : isPast || isDone ? 'text-[#22c55e]' : 'text-[#555]'
              )}>
                {step.label}
              </span>
            </div>
            {i < BUILDER_STEPS.length - 1 && (
              <div className={clsx(
                'w-8 h-px mx-1 mb-4',
                isPast || isDone ? 'bg-[#22c55e]' : 'bg-[#2a2a2a]'
              )} />
            )}
          </div>
        )
      })}
    </div>
  )
}
