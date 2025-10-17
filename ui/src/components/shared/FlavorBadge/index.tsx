import { FC } from 'react'

import { Flavor } from '~/graphql/generated/graphql'

interface FlavorBadgeProps {
  flavor: Flavor
}

export const FlavorBadge: FC<FlavorBadgeProps> = ({ flavor }) => {
  return (
    <div className="flex h-5 items-center justify-center gap-1 rounded-full bg-orange-200 px-2.5 text-xs">
      <span>{flavor.icon}</span>
      <span>{flavor.name}</span>
    </div>
  )
}
