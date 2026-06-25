import type { FC } from 'react'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'

import Button from '../Button'

const CommunityCard: FC = () => {
  return (
    <article
      className="
        max-w-125
        max-h-70
        py-9
        px-8
        rounded
        bg-black/65
        flex
        flex-col
        items-center
        m-4 md:m-0
      "
    >
      <h2 className="text-2xl md:text-4xl text-gold text-center">
        Únete a nuestra comunidad
      </h2>

      <p className="text-sm md:text-base text-cream text-center my-4">
        Habla y comparte con más personas con tus mismos gustos
      </p>

      <Button
        variant="secondary"
        label="Unirse a la comunidad"
        logo={<IoChatbubbleEllipsesOutline aria-hidden="true" focusable="false" />}
        aria-label="Unirse a la comunidad"
      />
    </article>
  )
}

export default CommunityCard
