'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

import { User } from '~/graphql/generated/graphql'

interface CurrentUserContextValue {
  setUser: (user: User | null) => void
  user: User | null
}

export const CurrentUserContext = createContext<CurrentUserContextValue>({
  setUser: () => {}, // default no-op
  user: null
})

export const useCurrentUser = () => useContext(CurrentUserContext)

interface CurrentUserProviderProps {
  children: ReactNode
  currentUser: User | null
}

export const CurrentUserProvider = ({ children, currentUser }: CurrentUserProviderProps) => {
  const [user, setUser] = useState<User | null>(currentUser)

  const value: CurrentUserContextValue = {
    setUser,
    user
  }

  return <CurrentUserContext.Provider value={value}>{children}</CurrentUserContext.Provider>
}
