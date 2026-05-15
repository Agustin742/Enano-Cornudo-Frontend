'use client'

import { useRef, useState, useEffect, useCallback, type FC, type MouseEvent } from 'react'
import ProductCard from '../ui/cards/ProductCard'
import styles from './ProductsSection.module.css'

export interface ProductsSectionProps {
  readonly title: string
  readonly description: string
}

export interface Product {
  readonly id: string
  readonly imageSrc: string
  readonly imageAlt: string
  readonly category: string
  readonly name: string
  readonly href: string
}

const PRODUCTS: readonly Product[] = [
  {
    id: '1',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Guerrero Enano con armadura completa y hacha de batalla',
    category: 'Miniaturas',
    name: 'Guerrero Enano',
    href: '/producto/1',
  },
  {
    id: '2',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Busto de elfo mago con robes detallados',
    category: 'Bustos',
    name: 'Busto Elfo Mago',
    href: '/producto/2',
  },
  {
    id: '3',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Escenario de fortaleza enana con murallas',
    category: 'Escenarios',
    name: 'Fortaleza Enana',
    href: '/producto/3',
  },
  {
    id: '4',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Cabalero sagrado con armadura brillante',
    category: 'Miniaturas',
    name: 'Caballero Sagrado',
    href: '/producto/4',
  },
  {
    id: '5',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Busto de orco guerrero con cicatrices de batalla',
    category: 'Bustos',
    name: 'Busto Orco Guerrero',
    href: '/producto/5',
  },
  {
    id: '6',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Set de vegetación enana para escenarios',
    category: 'Accesorios',
    name: 'Set Vegetación',
    href: '/producto/6',
  },
  {
    id: '7',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Dragon mecánico steampunk detalladamente articulado',
    category: 'Miniaturas',
    name: 'Dragón Mecánico',
    href: '/producto/7',
  },
  {
    id: '8',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Busto de líderes npcs con expresiones realistas',
    category: 'Bustos',
    name: 'Busto Líder Npc',
    href: '/producto/8',
  },
  {
    id: '9',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Taberna medieval con iluminación LED integrada',
    category: 'Escenarios',
    name: 'Taberna Medieval',
    href: '/producto/9',
  },
  {
    id: '10',
    imageSrc: '/images/mock/product.jpg',
    imageAlt: 'Caja de herramientas para miniatureo profesional',
    category: 'Accesorios',
    name: 'Kit Herramientas',
    href: '/producto/10',
  },
] as const

const ProductsSection: FC<ProductsSectionProps> = ({ title, description }: ProductsSectionProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    if (!carouselRef.current) return
    const { scrollLeft: sl, scrollWidth, clientWidth } = carouselRef.current
    const maxScroll = scrollWidth - clientWidth
    if (maxScroll <= 0) {
      setProgress(0)
      return
    }
    setProgress((sl / maxScroll) * 100)
  }, [])

  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setScrollLeft(carouselRef.current?.scrollLeft ?? 0)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const diff = startX - e.clientX
    const newScrollLeft = scrollLeft + diff
    carouselRef.current.scrollLeft = newScrollLeft
  }, [isDragging, startX, scrollLeft])

  const handleScroll = useCallback(() => {
    updateProgress()
  }, [updateProgress])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.addEventListener('scroll', handleScroll, { passive: true })
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section className={styles.section} aria-labelledby="featured-products-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="featured-products-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>
            {description}
          </p>
        </header>

        <div
          ref={carouselRef}
          className={styles.carousel}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          aria-label="Carrusel de productos destacados"
        >
          <ul className={styles.carouselContent}>
            {PRODUCTS.map((product: Product) => (
              <li key={product.id} className={styles.cardItem}>
                <ProductCard
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  category={product.category}
                  productName={product.name}
                />
              </li>
            ))}
          </ul>
        </div>

        <figure className={styles.scrollIndicator} aria-hidden="true">
          <figcaption className="sr-only">Indicador de progreso del carrusel</figcaption>
          <div className={styles.track}>
            <div
              className={styles.progress}
              style={{ width: `${Math.max(20, progress)}%`, left: 0 }}
            />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default ProductsSection