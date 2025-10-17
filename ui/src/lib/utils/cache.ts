/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryClient } from '~/providers/QueryClient'

export const getCachedItem = <T extends { id?: string | undefined }>(id: string | undefined, key: string[]): T | undefined => {
  const matchingQueries = queryClient.getQueryCache().findAll({
    exact: false,
    queryKey: key,
    type: 'all'
  })

  for (const query of matchingQueries) {
    const cached = query.state.data as { nodes?: T[] } | undefined
    const match = cached?.nodes?.find((item) => item.id === id)
    if (match) return match
  }

  return undefined
}

export const updateCachedItem = <T>(item: T, key: string[]) => {
  queryClient.setQueryData(key, item)
}

export const updateCachedItems = <T extends { id?: string }>(items: (T | null | undefined)[], key: string[]) => {
  // handle null/undefined items
  const validItems: T[] = (items ?? []).filter((i): i is T => !!i)

  const matchingQueries = queryClient.getQueryCache().findAll({
    queryKey: key,
    type: 'all'
  })

  for (const query of matchingQueries) {
    queryClient.setQueryData(query.queryKey, (cached: any) => {
      if (!cached) return cached

      if (Array.isArray(cached.nodes)) {
        return {
          ...cached,
          nodes: cached.nodes.map((node: T) => {
            const updated = validItems.find((i) => i.id === node.id)
            return updated ?? node
          })
        }
      }

      if (Array.isArray(cached)) {
        return cached.map((node: T) => {
          const updated = validItems.find((i) => i.id === node.id)
          return updated ?? node
        })
      }

      return cached
    })
  }
}

export const getCacheByAttachmentId = <
  T extends {
    attachment?: { id?: string | undefined } | null
    attachments?: ({ id?: string | undefined } | null)[] | null
  }
>(
  attachmentId: string | undefined,
  key: string[]
): T | undefined => {
  if (!attachmentId) return undefined

  const matchingQueries = queryClient.getQueryCache().findAll({
    queryKey: key,
    type: 'all'
  })

  for (const query of matchingQueries) {
    const cached = query.state.data as { nodes?: T[] } | undefined

    const match = cached?.nodes?.find((item) => {
      if (item.attachments?.some((a) => a?.id === attachmentId)) return true
      if (item.attachment?.id === attachmentId) return true
      return false
    })

    if (match) return match
  }

  return undefined
}

export const getCacheByWebpayTokenId = <T extends { id?: string | undefined }>(
  webpayTokenId: string | undefined,
  key: string[]
): T | undefined => {
  if (!webpayTokenId) return undefined

  const matchingQueries = queryClient.getQueryCache().findAll({
    queryKey: key,
    type: 'all'
  })

  for (const query of matchingQueries) {
    const cached = query.state.data as { nodes?: { webpayToken?: T | null }[] } | undefined

    const match = cached?.nodes?.find((item) => item.webpayToken?.id === webpayTokenId)

    if (match?.webpayToken) return match.webpayToken
  }

  return undefined
}
