'use client'

import { toast } from 'sonner'

import { SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchSuggestedSnacks } from '~/graphql/hooks/snack/useFetchSuggestedSnacks'
import { useFetchArgs } from '~/hooks/useFetchArgs'

import { SuggestedSnack } from './SuggestedSnack'

export const SnackSuggestions = () => {
  const fetchSuggestedSnacksParams = useFetchArgs({
    filters: [],
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchSuggestedSnacksQuery = useFetchSuggestedSnacks(fetchSuggestedSnacksParams.variables)

  const handleSwap = () => {
    toast.success('In Progress', {
      description: `Swap feature in progress, stay tuned for something awesome!`
    })
  }

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h2 className="text-lg font-bold">Swap Suggestions</h2>
      <div className="flex flex-col gap-2">
        {fetchSuggestedSnacksQuery.isLoading && <div>Loading ...</div>}
        {!fetchSuggestedSnacksQuery.isLoading &&
          fetchSuggestedSnacksQuery.data &&
          fetchSuggestedSnacksQuery.data?.nodes?.map((snack) => (
            <SuggestedSnack key={`suggested-snack-${snack.id}`} onClick={handleSwap} snack={snack} />
          ))}
      </div>
    </div>
  )
}
