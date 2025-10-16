export function parseToFloat(value: string | number | null | undefined): number {
  if (typeof value === 'number') return value
  if (!value) return 0

  const normalized = value.replace(/,/g, '').replace(/[^0-9.-]/g, '')
  const parsed = parseFloat(normalized)

  return isNaN(parsed) ? 0 : parsed
}
