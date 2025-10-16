'use client'

import { QueryClientProvider, QueryClient as ReactQueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { FC, ReactNode } from 'react'

interface QueryClientProps {
  children: ReactNode
}

export const queryClient = new ReactQueryClient({
  defaultOptions: {
    mutations: {
      retry: 0
    },
    queries: {
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

export const QueryClient: FC<QueryClientProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
