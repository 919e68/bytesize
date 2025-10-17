import { FC } from 'react'

import { Button } from '~/components/ui/button'

interface SnackActionProps {
  onEdit: () => void
  onRemove: () => void
}
export const SnackAction: FC<SnackActionProps> = ({ onEdit, onRemove }) => {
  return (
    <div className="flex w-full justify-end gap-2">
      <Button className="w-20 rounded-full text-xs font-semibold" onClick={onEdit}>
        Edit
      </Button>
      <Button className="w-20 rounded-full bg-red-500 text-xs font-semibold" onClick={onRemove}>
        Remove
      </Button>
    </div>
  )
}
