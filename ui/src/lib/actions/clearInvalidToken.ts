'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function clearInvalidToken() {
  const cookieStore = await cookies() // mutable in server action
  // mutable in server action
  cookieStore.set('auth_token', '', { maxAge: 0 }) // delete token
  redirect('/login') // redirect
}
