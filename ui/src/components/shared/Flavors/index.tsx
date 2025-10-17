import { FC } from 'react'

import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchFlavors } from '~/graphql/hooks/flavor/useFetchFlavors'
import { useFetchArgs } from '~/hooks/useFetchArgs'

import { FlavorIcon } from './FlavorIcon'
import { Loader } from './Loader'

interface FlavorProps {
  isCurrentUser?: boolean
  onClear?: () => void
  onSelect?: (flavor: Flavor) => void
  selectedFlavors?: string[]
  title?: string
}

export const Flavors: FC<FlavorProps> = ({ isCurrentUser = false, onClear, onSelect, selectedFlavors = [], title }) => {
  const fetchFlavorsParams = useFetchArgs({
    filters: isCurrentUser ? [{ type: 'isCurrentUser', value: true }] : [],
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchFlavorsQuery = useFetchFlavors(fetchFlavorsParams.variables)

  const handleSelectFlavor = (flavor: Flavor) => {
    onSelect?.(flavor)
  }

  const isLoading = fetchFlavorsQuery.isLoading || fetchFlavorsQuery.isFetching

  if (!isLoading && fetchFlavorsQuery?.data?.nodes?.length == 0) {
    return null
  }

  return (
    <div className="flex-1 flex-col">
      <div className="mb-2 flex h-5 justify-between">
        <div className="text-sm font-bold text-orange-500">{title}</div>

        {selectedFlavors.length > 0 && (
          <button className="cursor-pointer px-2 text-xs font-bold text-red-500" onClick={() => onClear?.()}>
            Clear Selection
          </button>
        )}
      </div>

      <div className='p-2 bg-orange-100 rounded-full'>
        <div className="scrollbar-thumb-black/10 scrollbar-thin flex space-x-4 overflow-x-auto rounded-full whitespace-nowrap">
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


    </div>
  )
}
