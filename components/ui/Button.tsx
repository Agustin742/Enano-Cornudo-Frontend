'use client'

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly label: string
  readonly variant: 'primary' | 'secondary'
  readonly logo?: ReactNode
}

const BUTTON_VARIANTS = {
  primary: 'bg-blood-red text-white-gray py-2',
  secondary: 'border-3 border-gold text-gold py-[5.6px]',
} as const

const Button: FC<ButtonProps> = ({
  label,
  variant,
  logo,
  className = '',
  ...props
}) => {
  return (
    <button
      type="button"
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-sm
        px-4
        font-bold
        transition
        duration-300
        hover:scale-105
        hover:brightness-110
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-gold
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${BUTTON_VARIANTS[variant]}
        ${className}
      `}
      {...props}
    >
      {logo}

      <strong className="not-italic">
        {label}
      </strong>
    </button>
  )
}

export default Button