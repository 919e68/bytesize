import { SearchIcon } from 'lucide-react'
import { FC } from 'react'

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '~/components/ui/input-group'
import { cn } from '~/lib/utils'

interface SearchProps {
  className?: string
  onChange?: (keyword: string) => void
  onClear?: () => void
  onSearch?: () => void
  value?: string
}

export const Search: FC<SearchProps> = ({ className, onChange, onClear, onSearch, value = '' }) => {
  const handleSearch = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      onSearch?.()
    }
  }

  const handleChange = (value: string) => {
    onChange?.(value)

    if (!value) {
      onClear?.()
    }
  }

  return (
    <div className={cn('flex gap-1', className)}>
      <InputGroup className="h-12 rounded-full">
        <InputGroupInput
          className="px-4"
          onChange={(evt) => handleChange(evt.target.value)}
          onKeyDown={handleSearch}
          placeholder="Type to search..."
          value={value}
        />
        <InputGroupAddon align="inline-end">
          {value && (
            <button className="cursor-pointer text-xs text-orange-500" onClick={onClear}>
              Clear
            </button>
          )}

          <InputGroupButton
            className="bg-primary hover:bg-primary/90 size-9 rounded-full px-4 text-xs font-bold text-white hover:text-white"
            onClick={onSearch}
          >
            <SearchIcon className="size-4" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
