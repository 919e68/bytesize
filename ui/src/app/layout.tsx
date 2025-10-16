import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import './globals.css'

import { Toaster } from '~/components/ui/sonner'
import { QueryClient } from '~/providers/QueryClient'
import { ThemeProvider } from '~/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  description: 'Snack Swap App',
  title: 'SnackSwap'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <QueryClient>
          <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
            {children}
            <Toaster closeButton position="top-right" />
          </ThemeProvider>
        </QueryClient>
      </body>
    </html>
  )
}

export default RootLayout
