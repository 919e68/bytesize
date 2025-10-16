import { BranchBadge } from '~/components/shared/Badges/BranchBadge'
import { Branch } from '~/graphql/generated/graphql'

export const branchOptions = (branches: Branch[]) => {
  return branches.map((item) => ({
    id: item.id,
    text: (
      <div className="flex min-w-0 gap-1">
        <BranchBadge branch={item.code} className="px-1" /> | {item.name}
      </div>
    ),
    value: item.id
  }))
}
