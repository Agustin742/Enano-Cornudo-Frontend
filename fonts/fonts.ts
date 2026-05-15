import localFont from 'next/font/local'
import { Anton_SC, Bitter } from 'next/font/google'

export const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bitter',
  display: 'swap',
})

export const anton = Anton_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

export const castellar = localFont({
  src: './castellar.ttf',
  variable: '--font-castellar',
  display: 'swap',
})