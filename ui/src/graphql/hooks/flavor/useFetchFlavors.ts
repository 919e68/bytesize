'use client'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { FetchFlavorsQuery, FlavorConnection } from '~/graphql/generated/graphql'
import { FETCH_FLAVORS_QUERY } from '~/graphql/queries/flavor/FetchFlavors'
import { DEFAULT_FETCH_PARAMS } from '~/hooks/useFetchArgs'
import { graphqlReq } from '~/lib/request'
import { QueryParams } from '~/lib/types/global'

export const useFetchFlavors = (params: Partial<QueryParams>, callback?: (data: FlavorConnection) => void) => {
  const variables = { ...DEFAULT_FETCH_PARAMS, ...params }
  const queryKey = ['FETCH_FLAVORS_QUERY', variables]

  return useQuery<FlavorConnection>({
    placeholderData: keepPreviousData,
    queryFn: () => {
      return graphqlReq<FetchFlavorsQuery>(FETCH_FLAVORS_QUERY, variables).then(({ flavors }) => {
        const connection = flavors as FlavorConnection
        callback?.(connection)
        return connection
      })
    },
    queryKey,
    staleTime: 60 * 1000
  })
}
