export function isPresent<T>(value: T | null | undefined | '' | []): value is Exclude<T, null | undefined | '' | []> {
  if (value === null || value === undefined || value === '') return false
  if (Array.isArray(value) && value.length === 0) return false

  return true
}

export const isValidAccountNumber = (type: string, value: string) => {
  if (['GC', 'MY'].includes(type) && value.length === 11) {
    return true
  } else if (['GTM', 'UB'].includes(type) && value.length === 12) {
    return true
  }

  return false
}

export const isValidReference = (type: string, referenceNumber?: string | null) => {
  if (!referenceNumber) return false

  if (type === 'GC' && referenceNumber.length != 13) return false
  if (type === 'MY' && referenceNumber.length != 12) return false
  if (type === 'GTM' && referenceNumber.length != 18) return false

  return true
}
