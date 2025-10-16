'use client'

import { WalletQueueItemTransactionTypeEnum } from '~/graphql/generated/graphql'
import { titleCase } from '~/lib/utils/string'

export const walletStatusOptions = () => {
  return [
    {
      id: 'PENDING',
      text: 'Pending',
      value: 'PENDING'
    },
    // {
    //   id: 'IN_PROGRESS',
    //   text: 'In Progress',
    //   value: 'IN_PROGRESS'
    // },
    {
      id: 'SUCCESS',
      text: 'Success',
      value: 'SUCCESS'
    },
    {
      id: 'MISMATCH',
      text: 'Mismatch',
      value: 'MISMATCH'
    },
    {
      id: 'LATE_PAYMENT',
      text: 'Late Payment',
      value: 'LATE_PAYMENT'
    },
    {
      id: 'REFUNDED',
      text: 'Refunded',
      value: 'REFUNDED'
    },
    {
      id: 'REJECTED',
      text: 'Rejected',
      value: 'REJECTED'
    }
  ]
}

export const walletTransactionTypeOptions = () => {
  return Object.values(WalletQueueItemTransactionTypeEnum).map((type) => ({
    id: type,
    text: titleCase(type.toString()),
    value: type
  }))
}
