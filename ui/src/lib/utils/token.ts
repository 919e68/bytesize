import { randomBytes } from 'crypto'
import { base64url } from 'jose'

export function generateClientCredentials() {
  const clientToken = base64url.encode(randomBytes(12)) // ~16 chars
  const clientSecret = base64url.encode(randomBytes(24)) // ~32 chars
  return { clientSecret, clientToken }
}
