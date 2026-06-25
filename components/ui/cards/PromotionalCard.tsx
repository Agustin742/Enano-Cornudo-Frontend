import type { FC, AnchorHTMLAttributes } from 'react'
import Image from 'next/image'
import { FaPencilAlt } from 'react-icons/fa'

import Button from '../Button'

export interface PromotionalCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly imageSrc?: string
  readonly imageAlt?: string
}

const mobileOverlay = 'linear-gradient(to bottom, var(--color-brown-dark) 2%, rgba(85,58,48,0.55) 4%, rgba(136,92,76,0.05) 18%, transparent 100%)'
const desktopOverlay = 'linear-gradient(to right, var(--color-brown-dark) 0%, rgba(85,58,48,0.55) 4%, rgba(136,92,76,0.05) 11%, transparent 100%)'

const PromotionalCard: FC<PromotionalCardProps> = ({
  imageSrc = '/images/mock/personalizadas.png',
  imageAlt = 'Miniaturas personalizadas de Enano Cornudo',
  className = '',
  ...props
}) => {
  return (
    <article
      className={`flex flex-col md:flex-row w-full min-h-100 md:min-h-120 mb-10 md:mb-17.5 ${className}`}
      {...props}
    >
      <div className="flex flex-col justify-center order-1 w-full md:w-1/3 bg-brown-dark py-6 pr-6 pl-7 md:py-8 md:pr-8 md:pl-7 rounded">
        <header className="mb-4 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl text-gold font-subtitle uppercase tracking-[0.02em] m-0 mb-4 leading-[1.2] md:max-w-69.25">
            Tu ejército Personalizado
          </h2>
          <p className="text-base text-text-light leading-[1.6] m-0 mb-4 md:mb-8">
            Desde héroes legendarios hasta ejércitos completos, creamos piezas personalizadas para que destaquen en cada batalla.
          </p>
        </header>
        <div className="mx-auto md:mx-0">
          <Button
            variant="secondary"
            label="Hace tu encargo"
            logo={<FaPencilAlt aria-hidden="true" focusable="false" />}
            aria-label="Hacer un encargo personalizado"
          />
        </div>
      </div>

      <figure className="relative order-2 w-full min-h-50 md:w-2/3 overflow-hidden">
        <div className="md:hidden absolute inset-0 z-1" style={{ background: mobileOverlay }} />
        <div className="hidden md:block absolute inset-0 z-1" style={{ background: desktopOverlay }} />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover object-center"
        />
      </figure>
    </article>
  )
}

export default PromotionalCard
