import { useState } from 'react'

import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchSnacks } from '~/graphql/hooks/snack/useFetchSnacks'
import { useFetchArgs } from '~/hooks/useFetchArgs'

import { Flavors } from '../Flavors'
import { SnackItem } from '../SnackItem'
import { Loader } from './Loader'
import { SnackAction } from './SnackAction'

export const MySnacks = () => {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const fetchSnacksParams = useFetchArgs({
    filters: [],
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchSnacksQuery = useFetchSnacks(fetchSnacksParams.variables)

  const handleSelectFlavor = (flavor: Flavor) => {
    setSelectedFlavors((prev) => {
      let newState: string[]

      if (prev.includes(flavor.id)) {
        newState = prev.filter((id) => id !== flavor.id)
      } else {
        newState = [...prev, flavor.id]
      }

      fetchSnacksParams?.setFilters([{ type: 'flavorId', value: newState }])
      return newState
    })
  }

  const handleClearFlavorFilter = () => {
    setSelectedFlavors([])
    fetchSnacksParams?.setFilters([])
  }

  const isLoading = fetchSnacksQuery.isLoading || fetchSnacksQuery.isFetching

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      <h2 className="text-lg font-bold">My Snacks</h2>
      <div className="scrollbar-thumb-black/10 scrollbar-thin overflow-x-auto">
        <Flavors onClear={handleClearFlavorFilter} onSelect={handleSelectFlavor} selectedFlavors={selectedFlavors} />
      </div>

      <div className="flex flex-col gap-2">
        {isLoading && <Loader />}

        {!isLoading &&
          fetchSnacksQuery.data?.nodes?.map((snack) => (
            <SnackItem key={`snack-${snack.id}`} snack={snack}>
              <SnackAction />
            </SnackItem>
          ))}
      </div>
    </div>
  )
}
