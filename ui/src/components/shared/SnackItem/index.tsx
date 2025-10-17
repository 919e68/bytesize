import { Bookmark, Star } from 'lucide-react'
import { FC, ReactNode } from 'react'

import { Snack } from '~/graphql/generated/graphql'

import { FlavorBadge } from '../FlavorBadge'

interface SnackProps {
  children?: ReactNode
  feature?: string
  ratings?: boolean
  snack: Snack
}

export const SnackItem: FC<SnackProps> = ({ children, feature, ratings = false, snack }) => {
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-lg bg-orange-100 p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {feature && (
            <div className="flex flex-1 items-center gap-2">
              <Bookmark className="size-6 fill-orange-500 text-orange-400" />
              <span className="text-lg font-bold text-orange-500">{feature}</span>
              <Bookmark className="size-6 fill-orange-500 text-orange-400" />
            </div>
          )}
          <div className="flex items-center gap-2">
            <div className="text-3xl">{snack.icon}</div>
            <div className="flex gap-4 text-lg font-semibold">
              <span>{snack.name}</span>
            </div>
          </div>

          {/* flavors */}
          <div className="flex gap-1">
            {snack.snackFlavors.map(({ flavor }) => (
              <FlavorBadge flavor={flavor} key={flavor.id} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* ratings */}
          {ratings && snack.ratingCount > 0 && (
            <div className="flex flex-col items-center justify-start gap-1">
              <div className="text-xs font-bold text-orange-400">({snack.ratingCount} Ratings)</div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span className="" key={`star-${star}`}>
                      <Star
                        className={`size-3 ${star <= Math.ceil(snack.averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400'}`}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {ratings && snack.ratingCount === 0 && (
            <div className="flex flex-col items-center gap-1">
              <div className="text-xs font-bold text-orange-400">(No stars yet, make it shine!)</div>
            </div>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-800">{snack.description || 'No Description'}</div>

      {children}
    </div>
  )
}
