import { useQuery } from '@tanstack/react-query'

import type { FeaturedSnack, FetchFeaturedSnackQuery } from '~/graphql/generated/graphql'

import { FETCH_FEATURED_SNACK_QUERY } from '~/graphql/queries/snack/FetchFeaturedSnack'
import { graphqlReq } from '~/lib/request'

export const useFetchFeaturedSnack = (featureType?: string, callback?: (data: FeaturedSnack) => void) => {
  const queryKey = ['FETCH_FEATURED_SNACK_QUERY', featureType]

  return useQuery<FeaturedSnack>({
    queryFn: () =>
      graphqlReq<FetchFeaturedSnackQuery>(FETCH_FEATURED_SNACK_QUERY, { featureType }).then((data) => {
        const featuredSnack = data.featuredSnack as FeaturedSnack

        callback?.(featuredSnack)
        return featuredSnack
      }),
    queryKey,
    staleTime: 1000 * 60 * 2
  })
}
