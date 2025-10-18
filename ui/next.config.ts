import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://api.snackswap.playfun.dev/**'),
      new URL('https://snackswap.playfun.dev/api/**')
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
