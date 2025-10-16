import { useMutation } from '@tanstack/react-query'

import type { MutationCallback } from '~/lib/types/global'

import { LogoutUserMutation } from '~/graphql/generated/graphql'
import { LOGOUT_USER_MUTATION } from '~/graphql/mutations/auth/LogoutUser'
import { graphqlReq } from '~/lib/request'

export const useLogoutUser = (callbacks?: MutationCallback) => {
  return useMutation<boolean, Error>({
    mutationFn: () => {
      return graphqlReq<LogoutUserMutation>(LOGOUT_USER_MUTATION).then((data) => {
        return data.logout as boolean
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
