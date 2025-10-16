'use client'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { FetchSnacksQuery, SnackConnection } from '~/graphql/generated/graphql'
import { FETCH_SNACKS_QUERY } from '~/graphql/queries/snack/FetchSnacks'
import { DEFAULT_FETCH_PARAMS } from '~/hooks/useFetchArgs'
import { graphqlReq } from '~/lib/request'
import { QueryParams } from '~/lib/types/global'

export const useFetchSnacks = (params: Partial<QueryParams>, callback?: (data: SnackConnection) => void) => {
  const variables = { ...DEFAULT_FETCH_PARAMS, ...params }
  const queryKey = ['FETCH_SNACKS_QUERY', variables]

  return useQuery<SnackConnection>({
    placeholderData: keepPreviousData,
    queryFn: () => {
      return graphqlReq<FetchSnacksQuery>(FETCH_SNACKS_QUERY, variables).then(({ snacks }) => {
        const connection = snacks as SnackConnection
        callback?.(connection)
        return connection
      })
    },
    queryKey,
    staleTime: 60 * 1000
  })
}
