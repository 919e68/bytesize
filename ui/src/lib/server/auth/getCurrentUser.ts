'use server'

import { cookies } from 'next/headers'

import { client } from '~/graphql/client'
import { CurrentUserQuery } from '~/graphql/generated/graphql'
import { FETCH_CURRENT_USER_QUERY } from '~/graphql/queries/auth/FetchCurrentUser'

export const getCurrentUser = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth_token')?.value

  if (!token) {
    return null
  }

  try {
    const data = await client.request<CurrentUserQuery>(FETCH_CURRENT_USER_QUERY, undefined, {
      Authorization: `Bearer ${token}`
    })
    return data.user
  } catch {
    localStorage.clear()
    return null
  }
}

export const getAuthCookie = async () => {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('auth_token')?.value
  return authToken
}
