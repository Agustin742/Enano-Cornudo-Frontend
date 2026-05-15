import type { Metadata } from 'next'
import './globals.css'

import NavBar from '@/components/layout/NavBar'

import {
  anton,
  bitter,
  castellar,
} from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Enano Cornudo',
  description: 'Catálogo para el contacto directo con el vendedor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`
        ${bitter.variable}
        ${anton.variable}
        ${castellar.variable}
      `}
    >
      <body className="min-h-screen flex flex-col bg-black-charcoal text-white-bone overflow-x-hidden font-body">
        <NavBar />
        {children}
      </body>
    </html>
  )
}