import type { FC } from 'react'
import CommunityCard from '../ui/cards/CommunityCard'

interface ReasonItem {
  readonly title: string
  readonly description: string
}

const REASONS: readonly ReasonItem[] = [
  {
    title: 'Calidad Superior',
    description: 'Utilizamos los mejores materiales y tecnología de impresión 3D disponible',
  },
  {
    title: 'Atención Personalizada',
    description: 'Asesoramiento experto para elegir las mejores piezas para tu colección',
  },
  {
    title: 'Precios Competitivos',
    description: 'La mejor relación calidad-precio del mercado',
  },
]

const CommunitySection: FC = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-99
        bg-cover
        bg-center
        flex
        flex-col
        md:flex-row
        justify-center
        items-center
        gap-10
        my-10
        py-4
        md:my-22.5
        md:py-9
      "
      style={{ backgroundImage: "url('/images/comunity-section.jpg')" }}
      aria-labelledby="community-title"
    >
      <div className="absolute inset-0 bg-brown-dark/70" aria-hidden="true" />

      <div className="relative z-1 flex flex-col items-center md:items-start">
        <h2
          id="community-title"
          className="
            text-2xl
            md:text-4xl
            font-subtitle
            text-gold
            text-center
            md:text-left
          "
        >
          ¿Por qué elegir El Enano Cornudo?
        </h2>

        <ul className="mt-4 flex flex-col gap-4">
          {REASONS.map(({ title, description }) => (
            <li key={title}>
              <p className="text-xl md:text-[28px] font-bold text-cream text-center md:text-left">
                {title}
              </p>
              <p className="text-sm md:text-base text-cream text-center md:text-left">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-1">
        <CommunityCard />
      </div>
    </section>
  )
}

export default CommunitySection
