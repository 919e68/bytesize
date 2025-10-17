import { FC } from 'react'

import { Input } from '~/components/ui/input'

const EMOJIS = ['🍕', '🌮', '🍣', '🍤', '🥓', '🍔', '🍝', '🍛', '🍱', '🥗', '🍊', '🍇', '🥦', '🌽', '🥜', '☕']

interface IconSelectionProps {
  onChange?: (icon: string) => void
  value?: string
}

export const IconSelection: FC<IconSelectionProps> = ({ onChange, value }) => {
  const handleSelectIcon = (icon: string) => {
    onChange?.(icon)
  }

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div>
        <Input onChange={(evt) => onChange?.(evt.target.value)} value={value} />
      </div>

      <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent overflow-x-auto">
        <div className="flex min-w-max space-x-2 px-2 py-1">
          {EMOJIS.map((icon, index) => (
            <button
              className="size-8 flex-shrink-0 cursor-pointer rounded-full bg-orange-100"
              key={`icon-input-${index}`}
              onClick={() => handleSelectIcon(icon)}
              type="button"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
