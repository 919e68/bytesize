'use client'

import { createContext, ReactNode, useContext } from 'react'

import { User } from '~/graphql/generated/graphql'

interface CurrentUserContextValue {
  user: User | null
}

export const CurrentUserContext = createContext<CurrentUserContextValue>({
  user: null
})

export const useCurrentUser = () => useContext(CurrentUserContext)

interface CurrentUserProviderProps {
  children: ReactNode
  currentUser: User
}

export const CurrentUserProvider = ({ children, currentUser }: CurrentUserProviderProps) => {
  const value = {
    user: currentUser
  }

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>
}
