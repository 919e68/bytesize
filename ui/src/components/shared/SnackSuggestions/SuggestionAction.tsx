import { FC } from 'react'

import { Button } from '~/components/ui/button'
import { Snack } from '~/graphql/generated/graphql'
import { cn } from '~/lib/utils'

import { Rating } from '../Rating'

interface SuggestionActionProps {
  onClick: () => void
  onRate: (snackId: string, rate: number) => void
  snack: Snack
}

export const SuggestionAction: FC<SuggestionActionProps> = ({ onClick, onRate, snack }) => {
  return (
    <div className={cn('flex w-full justify-between gap-12')}>
      <Rating onClick={onRate} rate={snack.currentUserRating} snack={snack} />

      <Button className="rounded-full text-xs font-semibold" onClick={onClick}>
        Ask For Swap
      </Button>
    </div>
  )
}
