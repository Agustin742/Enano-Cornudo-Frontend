'use client'

import type { FC, ReactElement } from 'react'
import { FaFire } from 'react-icons/fa6'
import { GrCatalog } from 'react-icons/gr'

import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

interface ActionButton {
  readonly label: string
  readonly variant: 'primary' | 'secondary'
  readonly icon: ReactElement
  readonly ariaLabel: string
  readonly href: string
}

const ACTION_BUTTONS: readonly ActionButton[] = [
  {
    label: 'Explorar Catalogo',
    variant: 'primary',
    icon: <GrCatalog aria-hidden="true" focusable="false" />,
    ariaLabel: 'Explorar catálogo',
    href: '/catalogo',
  },
  {
    label: 'Ver Novedades',
    variant: 'secondary',
    icon: <FaFire aria-hidden="true" focusable="false" />,
    ariaLabel: 'Ver novedades',
    href: '/#novedades',
  },
] as const

const HeroBanner: FC = () => {
  const router = useRouter()
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="
        relative
        min-h-screen
        bg-cover
        bg-center
        flex
        justify-center
        flex-col
        pl-3
        md:pl-8
        gradientBanner
      "
    >
      <header className="relative z-10 max-w-sm md:max-w-[50%] mb-11 md:mb-14">
        <p className="font-bold md:text-xl">
          Impresiones 3D Premium
        </p>

        <h2
          id="hero-title"
          className="
            text-3xl
            md:text-6xl
            font-title
            mt-5
            md:mt-7
            mb-4
            md:mb-5
            text-shadow-sm
            text-shadow-gold/30
          "
        >
          El Enano Cornudo
        </h2>

        <p className="text-sm md:text-base">
          Miniaturas, Bustos, Escenarios, todo lo que necesites <br />
          con la mejor calidad de impresión
        </p>
      </header>

      <nav
        aria-label="Acciones principales"
        className="z-10"
      >
        <ul className="flex items-center flex-wrap gap-4 md:gap-8">
          {ACTION_BUTTONS.map(({ label, variant, icon, ariaLabel, href }) => (
            <li key={label}>
              <Button
                label={label}
                variant={variant}
                logo={icon}
                aria-label={ariaLabel}
                onClick={() => router.push(href)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default HeroBanner