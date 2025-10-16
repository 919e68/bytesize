'use client'

import { UserType } from '~/graphql/generated/graphql'

export const userTypeOptions = (userTypes: UserType[]) => {
  return userTypes.map((item) => ({
    id: item.id,
    text: item.name,
    value: item.id
  }))
}
