import { FC } from 'react'

import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchFlavors } from '~/graphql/hooks/flavor/useFetchFlavors'
import { useFetchArgs } from '~/hooks/useFetchArgs'

import { FlavorIcon } from './FlavorIcon'
import { Loader } from './Loader'

interface FlavorProps {
  onClear?: () => void
  onSelect?: (flavor: Flavor) => void
  selectedFlavors?: string[]
  title?: string
}

export const Flavors: FC<FlavorProps> = ({ onClear, onSelect, selectedFlavors = [], title }) => {
  const fetchFlavorsParams = useFetchArgs({
    filters: [],
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchFlavorsQuery = useFetchFlavors(fetchFlavorsParams.variables)

  const handleSelectFlavor = (flavor: Flavor) => {
    onSelect?.(flavor)
  }

  const isLoading = fetchFlavorsQuery.isLoading || fetchFlavorsQuery.isFetching

  return (
    <div className="flex-1 flex-col">
      <div className="mb-2 flex h-5 justify-between">
        <div>{title}</div>

        {selectedFlavors.length > 0 && (
          <button className="cursor-pointer text-sm font-bold text-orange-500" onClick={() => onClear?.()}>
            Clear Selection
          </button>
        )}
      </div>

      <div className="scrollbar-thumb-black/10 scrollbar-thin flex space-x-4 overflow-x-auto px-2 whitespace-nowrap">
        {isLoading && <Loader />}

        {!isLoading &&
          fetchFlavorsQuery?.data?.nodes?.map((flavor) => (
            <FlavorIcon
              flavor={flavor}
              isActive={selectedFlavors.includes(flavor.id)}
              key={`flavor-${flavor.id}`}
              onClick={handleSelectFlavor}
            />
          ))}
      </div>
    </div>
  )
}
