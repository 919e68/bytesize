import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import {
  CreateRatingMutation,
  CreateRatingMutationVariables,
  FeaturedSnack,
  Rating,
  SnackConnection
} from '~/graphql/generated/graphql'
import { CREATE_RATING_MUTATION } from '~/graphql/mutations/rating/CreateRating'
import { graphqlReq } from '~/lib/request'
import { queryClient } from '~/providers/QueryClient'

export const useCreateRating = (callbacks?: MutationCallback) => {
  return useMutation<Rating, Error, CreateRatingMutationVariables>({
    mutationFn: (input) => {
      return graphqlReq<CreateRatingMutation, CreateRatingMutationVariables>(CREATE_RATING_MUTATION, input).then((data) => {
        return data.rating as Rating
      })
    },
    onError: (error) => {
      callbacks?.onError?.(error)
    },
    onMutate: (data) => {
      queryClient
        .getQueryCache()
        .findAll({ exact: false, queryKey: ['FETCH_SUGGESTED_SNACKS_QUERY'] })
        .forEach((query) => {
          const cached = query.state.data as SnackConnection
          if (!cached?.nodes) return

          const updated = cached.nodes.map((cachedItem) =>
            cachedItem.id === data.attributes.snackId ? { ...cachedItem, currentUserRating: data.attributes.rate } : cachedItem
          )
          queryClient.setQueryData(query.queryKey, { ...cached, nodes: updated })
        })

      queryClient
        .getQueryCache()
        .findAll({ exact: false, queryKey: ['FETCH_FEATURED_SNACK_QUERY'] })
        .forEach((query) => {
          const cached = query.state.data as FeaturedSnack
          if (!cached?.snack || data.attributes.snackId != cached.snack.id) return

          const updated = { ...cached }
          if (updated.snack) {
            updated.snack.currentUserRating = data.attributes.rate
            queryClient.setQueryData(query.queryKey, updated)
          }
        })
    },
    onSuccess: (data) => {
      callbacks?.onSuccess?.(data)
      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_FEATURED_SNACK_QUERY'] })
      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_SUGGESTED_SNACKS_QUERY'] })
    }
  })
}
