export const extractAmount = ({ bankType, text }: { bankType: string; text: string }) => {
  const patterns: Record<string, RegExp> = {
    GC: /amount\s+([\d,]+\.\d{2})/i,
    GTM: /\b\d{1,3}(?:,\d{3})*(?:\.\d{2})\b/,
    MY: /[pP]\s*([\d,]+\.\d{2})/
  }

  const regex = patterns[bankType]
  if (!regex) return ''

  const match = text.match(regex)
  return match ? (match[1] ?? match[0]) : ''
}

export const extractReferenceNumber = ({ bankType, text }: { bankType: string; text: string }) => {
  const patterns: Record<string, RegExp> = {
    GC: /ref no\.\s*(\d{4}\s\d{3}\s\d{6})/i,
    GTM: /\b\d{6}\b/,
    MY: /reference id ([a-z0-9]{4} [a-z0-9]{4} [a-z0-9]{4})/i
  }

  const regex = patterns[bankType]
  if (!regex) return ''

  const match = text.match(regex)
  if (!match) return ''

  const ref = match[1] ?? match[0]
  return ref.replace(/\s+/g, '').toUpperCase()
}
