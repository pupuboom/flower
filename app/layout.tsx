import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Home/Header'
import Footer from '@/components/Home/Footer'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Flower',
  description: 'Many kinds...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="h-full w-full flex flex-col min-h-[100vh]">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
