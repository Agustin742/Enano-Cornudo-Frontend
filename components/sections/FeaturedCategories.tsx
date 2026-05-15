'use client'

import type { FC } from 'react'
import CategoryCard from '../ui/cards/CategoryCard'

export interface Category {
  readonly id: string
  readonly title: string
  readonly href: string
}

const CATEGORIES: readonly Category[] = [
  {
    id: 'miniaturas',
    title: 'Miniaturas',
    href: '/catalogo/miniaturas',
  },
  {
    id: 'bustos',
    title: 'Bustos',
    href: '/catalogo/bustos',
  },
  {
    id: 'escenarios',
    title: 'Escenarios',
    href: '/catalogo/escenarios',
  },
  {
    id: 'accesorios',
    title: 'Accesorios',
    href: '/catalogo/accesorios',
  },
] as const

const FeaturedCategories: FC = () => {
  return (
    <section
      aria-labelledby="featured-categories-title"
      className="w-full px-6 md:px-8 my-10 md:mb-20"
    >
      <h2
        id="featured-categories-title"
        className="
          text-gold
          text-center
          text-2xl
          md:text-3xl
          font-subtitle
          py-3 md:py-4
        "
      >
        Categorías destacadas
      </h2>

      <nav aria-label="Categorías destacadas">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <CategoryCard
                title={category.title}
                href={category.href}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default FeaturedCategories