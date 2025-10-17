'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Pagination } from '~/components/primitive/Pagination'
import { useCurrentUser } from '~/context/CurrentUserContext'
import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useCreateRating } from '~/graphql/hooks/rating/useCreateRating'
import { useFetchFeaturedSnack } from '~/graphql/hooks/snack/useFetchFeaturedSnack'
import { useFetchSuggestedSnacks } from '~/graphql/hooks/snack/useFetchSuggestedSnacks'
import { useFetchArgs } from '~/hooks/useFetchArgs'
import { CodedError } from '~/lib/types/global'

import { ErrorRenderer } from '../ErrorRenderer'
import { Flavors } from '../Flavors'
import { Search } from '../Search'
import { SnackItem } from '../SnackItem'
import { Loader } from './Loader'
import { SuggestionAction } from './SuggestionAction'

export const SnackSuggestions = () => {
  const { user } = useCurrentUser()
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])

  const fetchSuggestedSnacksParams = useFetchArgs({
    filters: [],
    limit: 5,
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchSuggestedSnacksQuery = useFetchSuggestedSnacks(fetchSuggestedSnacksParams.variables)
  const fetchFeaturedAllTimeQuery = useFetchFeaturedSnack('all_time')
  const fetchFeaturedTodayQuery = useFetchFeaturedSnack('today')

  const createRatingMutation = useCreateRating({
    onError: (errors: CodedError[]) => {
      toast.error('Error', {
        description: <ErrorRenderer errors={errors} />
      })
    },
    onSuccess: () => {
      toast.success('Rating', {
        description: `Your rating's in! 🙌 Thanks, legend.`
      })
    }
  })

  const handleSelectFlavor = (flavor: Flavor) => {
    setSelectedFlavors((prev) => {
      let newState: string[]

      if (prev.includes(flavor.id)) {
        newState = prev.filter((id) => id !== flavor.id)
      } else {
        newState = [...prev, flavor.id]
      }

      fetchSuggestedSnacksParams?.addFilter('flavorId', newState)
      return newState
    })
  }

  const handleClearFlavorFilter = () => {
    setSelectedFlavors([])
    fetchSuggestedSnacksParams?.removeFilter('flavorId')
  }

  const handleSearch = () => {
    fetchSuggestedSnacksParams?.addFilter('search', searchKeyword)
  }

  const handleClearSearch = () => {
    setSearchKeyword('')
    fetchSuggestedSnacksParams?.removeFilter('search')
  }

  const handleRate = (snackId: string, rate: number) => {
    if (user) {
      createRatingMutation.mutate({ attributes: { rate, snackId } })
    } else {
      toast.success('Login', {
        description: 'You gotta sign in first to get in on this!'
      })
    }
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

  const isLoading = fetchSuggestedSnacksQuery.isLoading
  const featuredSnackIds = [fetchFeaturedAllTimeQuery?.data?.snack?.id, fetchFeaturedTodayQuery?.data?.snack?.id]

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      <h2 className="text-lg font-bold">Swap Suggestions</h2>
      <div className="scrollbar-thumb-black/10 scrollbar-thin overflow-x-auto">
        <Flavors
          onClear={handleClearFlavorFilter}
          onSelect={handleSelectFlavor}
          selectedFlavors={selectedFlavors}
          title="Filter by flavor"
        />
      </div>

      <Search
        onChange={(value) => setSearchKeyword(value)}
        onClear={handleClearSearch}
        onSearch={handleSearch}
        value={searchKeyword}
      />

      {/* featured snacks */}
      <div className="flex flex-col gap-4">
        {/* all time favorite */}
        {fetchFeaturedAllTimeQuery?.data?.snack && (
          <SnackItem feature="Snack Hall of Fame" ratings snack={fetchFeaturedAllTimeQuery.data.snack}>
            <SuggestionAction onClick={handleSwap} onRate={handleRate} snack={fetchFeaturedAllTimeQuery.data.snack} />
          </SnackItem>
        )}

        {/* popular today */}
        {fetchFeaturedTodayQuery?.data?.snack &&
          fetchFeaturedAllTimeQuery?.data?.snack?.id !== fetchFeaturedTodayQuery?.data?.snack?.id && (
            <SnackItem feature="Today's Top Pick" ratings snack={fetchFeaturedTodayQuery.data.snack}>
              <SuggestionAction onClick={handleSwap} onRate={handleRate} snack={fetchFeaturedTodayQuery.data.snack} />
            </SnackItem>
          )}
      </div>

      <div className="flex flex-col gap-4">
        {isLoading && <Loader />}

        {!isLoading &&
          fetchSuggestedSnacksQuery.data?.nodes
            ?.filter((snack) => !featuredSnackIds.includes(snack.id))
            .map((snack) => (
              <SnackItem key={`snack-${snack.id}`} ratings snack={snack}>
                <SuggestionAction onClick={handleSwap} onRate={handleRate} snack={snack} />
              </SnackItem>
            ))}
      </div>

      <div>
        <Pagination
          next={fetchSuggestedSnacksQuery.data?.pagination?.next}
          onClick={fetchSuggestedSnacksParams.setPage}
          page={fetchSuggestedSnacksParams.variables.page}
          pages={fetchSuggestedSnacksQuery.data?.pagination?.pages}
          prev={fetchSuggestedSnacksQuery.data?.pagination?.prev}
        />
      </div>
    </div>
  )
}
