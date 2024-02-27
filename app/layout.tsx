import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './_styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 14 Playground',
  description: 'Testing out Next 14.1 features including the new app router. Also, experimenting with features like Server Components, React Suspense, and blurredDataUrls.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
