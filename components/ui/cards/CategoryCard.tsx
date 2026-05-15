'use client'

import type { FC, AnchorHTMLAttributes } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export interface CategoryCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly title: string
  readonly href: string
  readonly ariaLabel?: string
}

const CategoryCard: FC<CategoryCardProps> = ({
  title,
  href,
  ariaLabel = `Ver categoría ${title}`,
  className = '',
  ...props
}) => {
  return (
    <a
      href={href}
      className={`
        group
        flex
        items-center
        justify-between
        bg-gray-red
        rounded
        p-3
        transition-all
        duration-200
        hover:opacity-90
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-gold
        cursor-pointer
        ${className}
      `}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <span className="text-white-bone text-sm md:text-base font-bold">
          Ver todo
        </span>
        <span className="text-white-bone text-base md:text-lg font-medium">
          {title}
        </span>
      </div>

      <FaArrowRight
        className="text-white-bone text-xl transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
        focusable="false"
      />
    </a>
  )
}

export default CategoryCard