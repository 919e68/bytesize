export const titleCase = (str?: string): string => {
  if (!str) return ''

  return str
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}
