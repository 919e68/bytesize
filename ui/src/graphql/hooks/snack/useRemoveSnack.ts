import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import { RemoveSnackMutation, RemoveSnackMutationVariables, Snack } from '~/graphql/generated/graphql'
import { REMOVE_SNACK_MUTATION } from '~/graphql/mutations/snack/RemoveSnack'
import { graphqlReq } from '~/lib/request'
import { queryClient } from '~/providers/QueryClient'

export const useRemoveSnack = (callbacks?: MutationCallback) => {
  return useMutation<Snack, Error, RemoveSnackMutationVariables>({
    mutationFn: (input) => {
      return graphqlReq<RemoveSnackMutation, RemoveSnackMutationVariables>(REMOVE_SNACK_MUTATION, input).then((data) => {
        return data.snack as Snack
      })
    },
    onError: (error) => {
      callbacks?.onError?.(error)
    },
    onSuccess: (data) => {
      callbacks?.onSuccess?.(data)

      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_FLAVORS_QUERY'] })
      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_SNACKS_QUERY'] })
      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_SUGGESTED_SNACKS_QUERY'] })
    }
  })
}
