import { BankTypeBadge } from '~/components/shared/Badges/BankTypeBadge'
import { BankType } from '~/graphql/generated/graphql'

export const bankTypeOptions = (bankTypes: BankType[]) => {
  return bankTypes.map((item) => ({
    id: item.id,
    text: (
      <div className="flex min-w-0 gap-1">
        <BankTypeBadge className="px-1" code={item.code} />
        <span className="flex-1 truncate"> | {item.name}</span>
      </div>
    ),
    value: item.id
  }))
}
