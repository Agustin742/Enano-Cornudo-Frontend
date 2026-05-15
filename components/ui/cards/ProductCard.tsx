'use client'

import type { FC, AnchorHTMLAttributes } from 'react'
import Image from 'next/image'
import { FaEye, FaShoppingCart } from 'react-icons/fa'

import Button from '../Button'
import styles from './ProductCard.module.css'

export interface ProductCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly imageSrc: string
  readonly imageAlt: string
  readonly category: string
  readonly productName: string
  readonly onView?: () => void
  readonly onBuy?: () => void
}

const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  category,
  productName,
  onView,
  onBuy,
  href,
  className = '',
  ...props
}) => {
  const cardContent = (
    <>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 277px"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div>
          <p className={styles.category}>{category}</p>
          <h3 className={styles.productName}>{productName}</h3>
        </div>

        <div className={styles.buttons}>
          <Button
            variant="secondary"
            label="Ver"
            logo={<FaEye aria-hidden="true" focusable="false" />}
            onClick={onView}
            aria-label={`Ver ${productName}`}
          />
          <Button
            variant="primary"
            label="Comprar"
            logo={<FaShoppingCart aria-hidden="true" focusable="false" />}
            onClick={onBuy}
            aria-label={`Comprar ${productName}`}
          />
        </div>
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${styles.card} ${className}`} {...props}>
        {cardContent}
      </a>
    )
  }

  return (
    <article className={`${styles.card} ${className}`} {...props}>
      {cardContent}
    </article>
  )
}

export default ProductCard