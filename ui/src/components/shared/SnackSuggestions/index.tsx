'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { useCurrentUser } from '~/context/CurrentUserContext'
import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchSuggestedSnacks } from '~/graphql/hooks/snack/useFetchSuggestedSnacks'
import { useFetchArgs } from '~/hooks/useFetchArgs'

import { Flavors } from '../Flavors'
import { SnackItem } from '../SnackItem'
import { Loader } from './Loader'
import { SuggestionAction } from './SuggestionAction'

export const SnackSuggestions = () => {
  const { user } = useCurrentUser()
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])

  const fetchSuggestedSnacksParams = useFetchArgs({
    filters: [],
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchSuggestedSnacksQuery = useFetchSuggestedSnacks(fetchSuggestedSnacksParams.variables)

  const handleSelectFlavor = (flavor: Flavor) => {
    setSelectedFlavors((prev) => {
      let newState: string[]

      if (prev.includes(flavor.id)) {
        newState = prev.filter((id) => id !== flavor.id)
      } else {
        newState = [...prev, flavor.id]
      }

      fetchSuggestedSnacksParams?.setFilters([{ type: 'flavorId', value: newState }])
      return newState
    })
  }

  const handleClearFlavorFilter = () => {
    setSelectedFlavors([])
    fetchSuggestedSnacksParams?.setFilters([])
  }

  const handleSwap = () => {
    if (user) {
      toast.success('In Progress', {
        description: 'Swap feature in progress, stay tuned for something awesome!'
      })
    } else {
      toast.success('Login', {
        description: 'You gotta sign in first to get in on this!'
      })
    }
  }

  const isLoading = fetchSuggestedSnacksQuery.isLoading || fetchSuggestedSnacksQuery.isFetching

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      <h2 className="text-lg font-bold">Swap Suggestions</h2>
      <div className="scrollbar-thumb-black/10 scrollbar-thin overflow-x-auto">
        <Flavors onClear={handleClearFlavorFilter} onSelect={handleSelectFlavor} selectedFlavors={selectedFlavors} />
      </div>

      <div className="flex flex-col gap-2">
        {isLoading && <Loader />}

        {!isLoading &&
          fetchSuggestedSnacksQuery.data?.nodes?.map((snack) => (
            <SnackItem key={`snack-${snack.id}`} snack={snack}>
              <SuggestionAction onClick={handleSwap} />
            </SnackItem>
          ))}
      </div>
    </div>
  )
}
