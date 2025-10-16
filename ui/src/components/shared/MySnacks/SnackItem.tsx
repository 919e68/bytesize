import { FC } from 'react'

import { Button } from '~/components/ui/button'
import { Snack } from '~/graphql/generated/graphql'

interface SnackProps {
  snack: Snack
}

export const SnackItem: FC<SnackProps> = ({ snack }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-orange-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="text-3xl">{snack.icon}</div>
          <div className="text-lg font-semibold">{snack.name}</div>
        </div>

        <div className="flex gap-1">
          {snack.snackFlavors.map((flavor) => (
            <div className="flex gap-1 rounded-full bg-orange-200 px-2 py-1 text-[10px]" key={`snack-flavor-${flavor.id}`}>
              <span>{flavor.flavor.icon}</span>
              <span>{flavor.flavor.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-800">{snack.description}</div>
      <div className="flex w-full justify-end gap-2">
        <Button className="w-20 rounded-full text-xs font-semibold">Edit</Button>
        <Button className="w-20 rounded-full bg-red-500 text-xs font-semibold">Remove</Button>
      </div>
    </div>
  )
}
