'use client'

import type { FC, AnchorHTMLAttributes } from 'react'
import Image from 'next/image'
import { FaPencilAlt } from 'react-icons/fa'


import styles from './PromotionalCard.module.css'
import Button from '../../Button'

export interface PromotionalCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly imageSrc?: string
  readonly imageAlt?: string
}

const PromotionalCard: FC<PromotionalCardProps> = ({
  imageSrc = '/images/mock/personalizadas.png',
  imageAlt = 'Miniaturas personalizadas de Enano Cornudo',
  href,
  className = '',
  ...props
}) => {
  const content = (
    <>
      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>Tu ejército Personalizado</h2>
          <p className={styles.description}>
            Desde héroes legendarios hasta ejércitos completos, creamos piezas personalizadas para que destaquen en cada batalla.
          </p>
        </header>
        <div className={styles.actions}>
          <Button
            variant="secondary"
            label="Hace tu encargo"
            logo={<FaPencilAlt aria-hidden="true" focusable="false" />}
            aria-label="Hacer un encargo personalizado"
          />
        </div>
      </div>
      <figure className={styles.imageWrapper}>
        <div className={styles.overlay} />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className={styles.image}
        />
      </figure>
    </>
  )

  if (href) {
    return (
      <article className={`${styles.card} ${className}`} {...props}>
        {content}
      </article>
    )
  }

  return (
    <article className={`${styles.card} ${className}`} {...props}>
      {content}
    </article>
  )
}

export default PromotionalCard