'use client'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit'
}

const variants = {
  primary: 'bg-[#22c55e] text-black hover:bg-[#16a34a] font-semibold',
  secondary: 'bg-[#1a1a1a] text-[#f0f0f0] border border-[#2a2a2a] hover:bg-[#222] hover:border-[#3a3a3a]',
  ghost: 'text-[#888] hover:text-[#f0f0f0] hover:bg-[#1a1a1a]',
  danger: 'bg-[#450a0a] text-[#ef4444] border border-[#7f1d1d] hover:bg-[#7f1d1d] hover:text-white',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
}

export function Button({ children, onClick, variant = 'secondary', size = 'md', disabled, className, type = 'button' }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-md transition-colors cursor-pointer',
        variants[variant],
        sizes[size],
        disabled && 'opacity-40 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}
