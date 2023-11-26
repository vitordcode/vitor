import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
})

export const metadata: Metadata = {
  title: 'Vitor de Paula',
  description: 'Front-end Developer Freelancer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={clsx('flex flex-col', inter.variable, grotesk.variable)}>
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
