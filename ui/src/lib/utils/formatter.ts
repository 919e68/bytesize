import { Maybe } from '../types/global'
import { time } from './time'

export const formatId = (id?: number | string, length: number = 6) => {
  if (!id) return null
  return id.toString().slice(-length)
}

export const formatDate = (dateString: string | null | undefined, withTime: boolean = false) => {
  return time(dateString)
    .local()
    .format(`YYYY-MM-DD${withTime ? ' hh:mm A' : ''}`)
}

export const formatDecimal = (value: Maybe<string | number>, decimalPoints = 2): Maybe<string> => {
  if (value === null || value === undefined) return null

  const num = typeof value === 'string' ? Number(value) : value
  if (isNaN(num)) return null

  const numberParts = num.toFixed(decimalPoints).split('.')
  numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return numberParts.join('.')
}

export const formatReference = (type: string, referenceNumber?: string | null, separator: string = '-'): string => {
  if (!referenceNumber) return '-'

  if (referenceNumber.length <= 7) {
    return referenceNumber
  }

  if (type === 'GC' && referenceNumber.length === 13) {
    return referenceNumber.replace(/^(\d{4})(\d{3})(\d{6})$/, `$1${separator}$2${separator}$3`)
  } else if (type === 'MY' && referenceNumber.length === 12) {
    return referenceNumber.replace(/^([A-Za-z0-9]{4})([A-Za-z0-9]{4})([A-Za-z0-9]{4})$/, `$1${separator}$2${separator}$3`)
  }

  return referenceNumber.replace(/([A-Za-z0-9]{4})(?=[A-Za-z0-9])/g, `$1${separator}`)
}

export const formatAccountNumber = (type: string, accountNumber?: string | null, separator: string = '-'): string => {
  if (!accountNumber) return ''

  const cleaned = accountNumber.replace(/[^a-zA-Z0-9]/g, '')

  if (cleaned.length <= 7) {
    return cleaned
  }

  if (['GC', 'MY'].includes(type) && cleaned.length == 11) {
    return cleaned.replace(/^(\d{4})(\d{3})(\d{4})$/, `$1${separator}$2${separator}$3`)
  }

  return cleaned.replace(/(\d{4})(?=\d)/g, `$1${separator}`)
}

export const prettyJson = (data: unknown): string => {
  try {
    if (typeof data === 'string') {
      return JSON.stringify(JSON.parse(data), null, 2)
    }
    return JSON.stringify(data, null, 2)
  } catch {
    return typeof data === 'string' ? data : String(data)
  }
}
