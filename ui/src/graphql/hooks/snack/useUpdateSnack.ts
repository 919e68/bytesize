import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import { Snack, UpdateSnackMutation, UpdateSnackMutationVariables } from '~/graphql/generated/graphql'
import { UPDATE_SNACK_MUTATION } from '~/graphql/mutations/snack/UpdateSnack'
import { graphqlReq } from '~/lib/request'
import { queryClient } from '~/providers/QueryClient'

export const useUpdateSnack = (callbacks?: MutationCallback) => {
  return useMutation<Snack, Error, UpdateSnackMutationVariables>({
    mutationFn: (input) => {
      return graphqlReq<UpdateSnackMutation, UpdateSnackMutationVariables>(UPDATE_SNACK_MUTATION, input).then((data) => {
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
      queryClient.invalidateQueries({ queryKey: ['FETCH_SNACK_QUERY', data.id] })
    }
  })
}
