'use client'

import type { FC, AnchorHTMLAttributes } from 'react'
import Image from 'next/image'
import { FaEye, FaShoppingCart } from 'react-icons/fa'

import Button from '../Button'

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
  const cardClass = `flex flex-col h-[417px] w-[277px] max-md:w-full max-md:max-w-[277px] bg-gray-red rounded overflow-hidden shrink-0 ${className}`

  const cardContent = (
    <>
      <div className="relative h-[65%] w-full overflow-hidden select-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 277px"
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
          unoptimized
        />
      </div>

      <div className="flex flex-col justify-between h-[35%] px-4">
        <div>
          <p className="text-sm text-beige-light font-normal mt-3 mb-1.5">{category}</p>
          <h3 className="text-[22px] text-beige-light m-0 font-bold">{productName}</h3>
        </div>

        <div className="flex gap-5 items-start mb-3">
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
      <a href={href} className={cardClass} {...props}>
        {cardContent}
      </a>
    )
  }

  return (
    <article className={cardClass} {...props}>
      {cardContent}
    </article>
  )
}

export default ProductCard
