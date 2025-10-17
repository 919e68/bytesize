import { FC } from 'react'

import { ContentLoader } from '~/components/shared/ContentLoader'
import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchFlavors } from '~/graphql/hooks/flavor/useFetchFlavors'
import { useFetchArgs } from '~/hooks/useFetchArgs'
import { cn } from '~/lib/utils'

interface FlavorSelectionProps {
  onChange?: (flavorIds: string[]) => void
  value?: string[]
}

const Loader = () => {
  return (
    <ContentLoader>
      <div className="h-5"></div>
      <div className="flex space-x-2">
        <div className="h-8 w-20 rounded-full bg-orange-200"></div>
        <div className="h-8 w-20 rounded-full bg-orange-200"></div>
        <div className="h-8 w-20 rounded-full bg-orange-200"></div>
      </div>
    </ContentLoader>
  )
}

export const FlavorSelection: FC<FlavorSelectionProps> = ({ onChange, value }) => {
  const fetchFlavorsParams = useFetchArgs({
    filters: [],
    order: [{ direction: SortDirectionEnum.Asc, field: 'id' }]
  })
  const fetchFlavorsQuery = useFetchFlavors(fetchFlavorsParams.variables)

  const handleSelectFlavor = (flavor: Flavor) => {
    let newValue: string[] = value ? [...value] : []

    if (newValue.includes(flavor.id)) {
      newValue = newValue.filter((id) => id !== flavor.id)
    } else {
      newValue = [...newValue, flavor.id]
    }

    onChange?.(newValue)
  }

  const isLoading = fetchFlavorsQuery.isLoading || fetchFlavorsQuery.isFetching

  return (
    <div className="flex flex-1 flex-col gap-2">
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent overflow-x-auto">
          <div className="flex min-w-max space-x-2 px-2 py-1">
            {fetchFlavorsQuery?.data?.nodes?.map((flavor) => (
              <button
                className={cn(
                  'flex flex-shrink-0 cursor-pointer items-center gap-1 rounded-full bg-orange-100 px-3 py-2 text-xs',
                  {
                    'bg-orange-300': value?.includes(flavor.id)
                  }
                )}
                key={`flavor-input-${flavor.id}`}
                onClick={() => handleSelectFlavor(flavor)}
                type="button"
              >
                <span>{flavor.icon}</span>
                <span>{flavor.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
