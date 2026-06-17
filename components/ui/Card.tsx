'use client'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; onClick?: () => void; hover?: boolean }

export function Card({ children, className, onClick, hover }: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'rounded-xl border border-[#2a2a2a] bg-[#111] p-4',
        hover && 'hover:border-[#3a3a3a] hover:bg-[#141414] transition-colors cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
