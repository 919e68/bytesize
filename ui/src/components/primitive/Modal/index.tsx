'use client'

import { ReactNode } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog'

export interface ModalProps {
  children?: ReactNode
  className?: string
  description?: string
  footer?: ReactNode
  onClose: () => void
  open: boolean
  title?: string
}

export const Modal: React.FC<ModalProps> = ({ children, className, description, footer, onClose, open, title }) => {
  return (
    <Dialog onOpenChange={onClose} open={open}>
      <DialogContent className={className}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}

        {children}

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
