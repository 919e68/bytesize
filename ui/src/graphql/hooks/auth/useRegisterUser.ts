import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import { RegisterUserMutation, RegisterUserMutationVariables, User } from '~/graphql/generated/graphql'
import { REGISTER_USER_MUTATION } from '~/graphql/mutations/auth/RegisterUser'
import { graphqlReq } from '~/lib/request'

export const useRegisterUser = (callbacks?: MutationCallback) => {
  return useMutation<User, Error, RegisterUserMutationVariables>({
    mutationFn: (input) => {
      return graphqlReq<RegisterUserMutation, RegisterUserMutationVariables>(REGISTER_USER_MUTATION, input).then((data) => {
        return data.user as User
      })
    },
    onError: (error) => {
      callbacks?.onError?.(error)
    },
    onSuccess: (data) => {
      callbacks?.onSuccess?.(data)
    }
  })
}
