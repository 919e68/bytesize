import type { Metadata, Viewport } from 'next'

import { Karla } from 'next/font/google'

import './globals.css'

import { Header } from '~/components/shared/Header'
import { Toaster } from '~/components/ui/sonner'
import { CurrentUserProvider } from '~/context/CurrentUserContext'
import { User } from '~/graphql/generated/graphql'
import { getCurrentUser } from '~/lib/server/auth'
import { QueryClient } from '~/providers/QueryClient'
import { ThemeProvider } from '~/providers/ThemeProvider'

const font = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Snack Swap App',
  title: 'SnackSwap',
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
}

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
}

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-yellow-50 antialiased`}>
        <QueryClient>
          <CurrentUserProvider currentUser={currentUser as User}>
            <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange enableSystem>
              <Header />
              {children}
              <Toaster closeButton position="top-center" />
            </ThemeProvider>
          </CurrentUserProvider>
        </QueryClient>
      </body>
    </html>
  )
}

export default RootLayout
