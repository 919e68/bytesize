'use client'

import { BankTypeBadge } from '~/components/shared/Badges/BankTypeBadge'
import { Bank } from '~/graphql/generated/graphql'

import { formatAccountNumber } from '../utils/formatter'

export const bankOptions = (banks: Bank[]) => {
  return banks.map((item) => ({
    id: item.id,
    text: (
      <div className="flex min-w-0 gap-1">
        <BankTypeBadge className="px-1" code={item.bankType.code} />
        <span className="flex-1 truncate">
          {formatAccountNumber('GC', item.accountNumber)} | {item.code}
        </span>
      </div>
    ),
    value: item.id
  }))
}
