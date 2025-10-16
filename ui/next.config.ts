import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://api.app.playfun.dev/**'),
      new URL('https://api.app.live/api/**'),
      new URL('https://api.app.playfun.dev/api/**')
    ]
  },
  output: 'standalone',
  async rewrites() {
    return [
      {
        destination: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
        source: '/graphql'
      }
    ]
  }
  // typedRoutes: true
}

export default nextConfig
