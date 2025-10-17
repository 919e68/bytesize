import { Star } from 'lucide-react'
import { FC } from 'react'

import { Snack } from '~/graphql/generated/graphql'

interface RatingProps {
  onClick?: (snackId: string, rate: number) => void
  rate?: number | null
  snack: Snack
}

export const Rating: FC<RatingProps> = ({ onClick, rate, snack }) => {
  const handleRate = (value: number) => {
    onClick?.(snack.id, value)
  }

  return (
    <div className="flex flex-1 justify-between">
      <div className="flex flex-col gap-1">
        <div className="text-xs font-bold text-orange-500">Give it a rating</div>
        <div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button className="cursor-pointer" key={`snack-rating-${snack.id}-${star}`} onClick={() => handleRate(star)}>
                <Star className={`size-5 ${star <= (rate || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
