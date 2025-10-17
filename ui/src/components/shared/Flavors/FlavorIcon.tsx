import { FC } from 'react'

import { Flavor } from '~/graphql/generated/graphql'
import { cn } from '~/lib/utils'

interface FlavorIconProps {
  flavor: Flavor
  isActive?: boolean
  onClick?: (flavor: Flavor) => void
}

export const FlavorIcon: FC<FlavorIconProps> = ({ flavor, isActive = false, onClick }) => {
  const handleClick = () => {
    onClick?.(flavor)
  }

  return (
    <button
      className={cn(
        'flex h-16 w-16 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-transparent bg-orange-200',
        {
          'border-orange-500 bg-orange-300 font-bold': isActive
        }
      )}
      onClick={handleClick}
    >
      <div className="text-xl">{flavor.icon}</div>
      <div className={cn('text-[10px] text-black')}>{flavor.name}</div>
    </button>
  )
}
