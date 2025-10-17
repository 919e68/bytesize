import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import { CreateSnackMutation, CreateSnackMutationVariables, Snack } from '~/graphql/generated/graphql'
import { CREATE_SNACK_MUTATION } from '~/graphql/mutations/snack/CreateSnack'
import { graphqlReq } from '~/lib/request'
import { queryClient } from '~/providers/QueryClient'

export const useCreateSnack = (callbacks?: MutationCallback) => {
  return useMutation<Snack, Error, CreateSnackMutationVariables>({
    mutationFn: (input) => {
      return graphqlReq<CreateSnackMutation, CreateSnackMutationVariables>(CREATE_SNACK_MUTATION, input).then((data) => {
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
