import '../styles/globals.css'
import { Playfair_Display, Quicksand } from 'next/font/google'
import NavBar from './NavBar'

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
    <html
      lang="en"
      className={`${playfair.variable} ${quicksand.variable} supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]`}
    >
      <body className="h-full flex flex-col justify-start">
        <header className="shadow-md w-screen relative h-24 md:h-28 top-0 bg-white">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
