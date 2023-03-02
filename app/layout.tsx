import './globals.css'
import { Playfair_Display, Quicksand } from 'next/font/google'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  display: 'swap',
})

const quicksand = Quicksand({
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata = {
  title: 'JC Analysis',
  description: 'I will crack you open like a freshly boiled lobster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  )
}
