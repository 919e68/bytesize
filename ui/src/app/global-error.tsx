'use client'

import { AlertTriangle, RefreshCcw } from 'lucide-react'
import { useEffect } from 'react'

import { Button } from '~/components/ui/button'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('💥 Global error caught:', error)
  }, [error])

  return (
    <html>
      <body className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
        <div className="px-6 text-center">
          <div className="mb-6 flex justify-center">
            <AlertTriangle className="h-14 w-14 text-red-500 drop-shadow-lg" />
          </div>

          <h1 className="mb-2 text-3xl font-bold tracking-tight">Something went wrong</h1>
          <p className="mx-auto mb-6 max-w-md text-gray-400">
            An unexpected error has occurred. You can try reloading the app to recover. If the issue continues, please contact the
            administrator.
          </p>

          <Button
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white hover:bg-red-500 focus:ring-2 focus:ring-red-400 focus:outline-none"
            onClick={() => reset()}
          >
            <RefreshCcw className="h-4 w-4" />
            Try again
          </Button>

          {error?.digest && <p className="mt-6 text-xs text-gray-500">Error ID: {error.digest}</p>}
        </div>
      </body>
    </html>
  )
}
