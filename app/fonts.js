// app/fonts.ts
import localFont from 'next/font/local'

export const neueMontreal = localFont({
  src: './fonts/NeueMontreal/NeueMontreal-Light.otf',
  weight: '300',
  variable: '--font-neue-montreal',
})

export const recklessNeue = localFont({
  src: './fonts/RecklessNeue/RecklessNeue-Light.ttf',
  weight: '300',
  variable: '--font-reckless-neue',
})
