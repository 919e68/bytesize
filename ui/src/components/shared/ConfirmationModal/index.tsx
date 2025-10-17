import { LoaderCircle } from 'lucide-react'
import { FC } from 'react'

import { Modal } from '~/components/primitive/Modal'
import { Button } from '~/components/ui/button'
import { DialogClose } from '~/components/ui/dialog'

interface ConfirmationModal {
  confirmText?: string
  description?: string
  isLoading?: boolean
  onClose: () => void
  onConfirm: () => void
  open: boolean
  title?: string
}

export const ConfirmationModal: FC<ConfirmationModal> = ({
  confirmText = 'Confirm',
  description,
  isLoading = false,
  onClose,
  onConfirm,
  open,
  title
}) => {
  const footer = (
    <div className="flex w-full flex-col-reverse justify-end gap-2 md:flex-row">
      <DialogClose asChild>
        <Button type="button" variant="ghost">
          Cancel
        </Button>
      </DialogClose>

      <Button className="w-full rounded-full md:w-[150px]" disabled={isLoading} onClick={onConfirm} variant="destructive">
        {isLoading ? <LoaderCircle className="size-5 animate-spin" /> : confirmText}
      </Button>
    </div>
  )

  return <Modal description={description} footer={footer} onClose={onClose} open={open} title={title} />
}
