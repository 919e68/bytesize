import { FC } from 'react'

import { Button } from '~/components/ui/button'

interface SuggestionActionProps {
  onClick: () => void
}

export const SuggestionAction: FC<SuggestionActionProps> = ({ onClick }) => {
  return (
    <div className="flex w-full justify-end">
      <Button className="rounded-full text-xs font-semibold" onClick={onClick}>
        Ask For Swap
      </Button>
    </div>
  )
}
