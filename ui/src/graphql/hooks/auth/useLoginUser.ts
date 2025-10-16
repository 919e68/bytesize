import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import { LoginResult, LoginUserMutation, LoginUserMutationVariables } from '~/graphql/generated/graphql'
import { LOGIN_USER_MUTATION } from '~/graphql/mutations/auth/LoginUser'
import { graphqlReq } from '~/lib/request'
import { queryClient } from '~/providers/QueryClient'

export const useLoginUser = (callbacks?: MutationCallback) => {
  return useMutation<LoginResult, Error, LoginUserMutationVariables>({
    mutationFn: (input) => {
      return graphqlReq<LoginUserMutation, LoginUserMutationVariables>(LOGIN_USER_MUTATION, input).then((data) => {
        return data.auth as LoginResult
      })
    },
    onError: (error) => {
      callbacks?.onError?.(error)
    },
    onSuccess: (data) => {
      callbacks?.onSuccess?.(data)

      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_SNACKS_QUERY'] })
      queryClient.invalidateQueries({ exact: false, queryKey: ['FETCH_SUGGESTED_SNACKS_QUERY'] })
    }
  })
}
