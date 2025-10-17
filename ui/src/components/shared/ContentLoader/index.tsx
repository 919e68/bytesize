import { FC, ReactNode } from 'react'

import { cn } from '~/lib/utils'

interface ContentLoaderProps {
  children?: ReactNode
  className?: string
}
export const ContentLoader: FC<ContentLoaderProps> = ({ children, className }) => {
  return <div className={cn('flex animate-pulse', className)}>{children}</div>
}
