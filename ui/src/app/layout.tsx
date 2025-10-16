import type { Metadata } from 'next'

import { Karla } from 'next/font/google'

import './globals.css'

import { Header } from '~/components/shared/Header'
import { Toaster } from '~/components/ui/sonner'
import { QueryClient } from '~/providers/QueryClient'
import { ThemeProvider } from '~/providers/ThemeProvider'

const font = Karla({ subsets: ['latin'] })

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
      <body className={`${font.className} bg-yellow-50 antialiased`}>
        <QueryClient>
          <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange enableSystem>
            <Header />
            {children}
            <Toaster closeButton position="top-right" />
          </ThemeProvider>
        </QueryClient>
      </body>
    </html>
  )
}

export default RootLayout
