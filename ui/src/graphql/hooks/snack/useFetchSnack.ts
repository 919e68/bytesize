import { useQuery } from '@tanstack/react-query'

import type { FetchSnackQuery, Snack, SnackConnection } from '~/graphql/generated/graphql'

import { FETCH_SNACK_QUERY } from '~/graphql/queries/snack/FetchSnack'
import { graphqlReq } from '~/lib/request'
import { queryClient } from '~/providers/QueryClient'

export const useFetchSnack = (id?: string, callback?: (data: Snack) => void) => {
  const queryKey = ['FETCH_SNACK_QUERY', id]

  const matchingQueries = queryClient
    .getQueryCache()
    .findAll({ queryKey: ['FETCH_SNACKS_QUERY'], type: 'active' })

  let cached: Snack | undefined;

  for (const query of matchingQueries) {
    const data = query.state.data as SnackConnection | undefined
    const match = data?.nodes?.find((t) => t.id === id)
    if (match) {
      cached = match
      break
    }
  }

  return useQuery<Snack>({
    enabled: Boolean(id),
    initialData: cached,
    placeholderData: (prev) => prev,
    queryFn: () =>
      graphqlReq<FetchSnackQuery>(FETCH_SNACK_QUERY, { id }).then((data) => {
        if (callback) {
          callback(data.snack as Snack)
        }

        return data.snack as Snack
      }),
    queryKey,
    staleTime: 1000 * 30
  })
}
