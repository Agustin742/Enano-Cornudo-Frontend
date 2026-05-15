'use client'

import type { FC } from 'react'
import PromotionalCard from '../ui/cards/promotional/PromotionalCard'


const PromotionalSection: FC = () => {
  return (
    <section aria-labelledby="promotional-title">
      <h2 id="promotional-title" className="sr-only">
        Promoción de servicios personalizados
      </h2>
      <div className='mx-8'>
        <PromotionalCard />
      </div>
    </section>
  )
}

export default PromotionalSection