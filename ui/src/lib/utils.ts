import { clsx, type ClassValue } from 'clsx'
import { addDays, format, isAfter } from 'date-fns'
import { jwtVerify } from 'jose'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const parseCookies = (cookies: string): Record<string, string> => {
  const result: Record<string, string> = {}

  cookies.split(';').forEach((cookie) => {
    const [name, value] = cookie.split('=').map((part) => part.trim())
    if (name && value) {
      result[name] = decodeURIComponent(value)
    }
  })

  return result
}

export const getRandomNumber = (min: number, max: number): number => {
  if (min > max) {
    throw new Error('Min cannot be greater than max')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const verifyToken = async (token: string | undefined): Promise<boolean> => {
  if (!token) return false

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    await jwtVerify(token, secret)
    return true
  } catch {
    return false
  }
}

export const getDateRangeList = (from: Date, to: Date): string[] => {
  const dates: string[] = []
  let current = from

  while (!isAfter(current, to)) {
    dates.push(format(current, 'yyyy-MM-dd'))
    current = addDays(current, 1)
  }

  return dates
}
