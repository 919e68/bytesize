import { PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { useToggle } from 'react-use'
import { toast } from 'sonner'

import { SnackForm } from '~/components/forms/SnackForm'
import { Modal } from '~/components/primitive/Modal'
import { Pagination } from '~/components/primitive/Pagination'
import { Button } from '~/components/ui/button'
import { Flavor, SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchSnacks } from '~/graphql/hooks/snack/useFetchSnacks'
import { useRemoveSnack } from '~/graphql/hooks/snack/useRemoveSnack'
import { useFetchArgs } from '~/hooks/useFetchArgs'
import { CodedError } from '~/lib/types/global'

import { ConfirmationModal } from '../ConfirmationModal'
import { ErrorRenderer } from '../ErrorRenderer'
import { Flavors } from '../Flavors'
import { Search } from '../Search'
import { SnackItem } from '../SnackItem'
import { Loader } from './Loader'
import { SnackAction } from './SnackAction'

export const MySnacks = () => {
  const [snackId, setSnackId] = useState<string | undefined>()
  const [isFormOpen, setIsFormOpen] = useToggle(false)
  const [removeConfirmation, setRemoveConfirmation] = useToggle(false)
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const fetchSnacksParams = useFetchArgs({
    filters: [],
    limit: 5,
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchSnacksQuery = useFetchSnacks(fetchSnacksParams.variables)

  const removeSnackMutation = useRemoveSnack({
    onError: (errors: CodedError[]) => {
      toast.error('Error', {
        description: <ErrorRenderer errors={errors} />
      })
    },
    onSuccess: () => {
      setSnackId(undefined)
      setRemoveConfirmation(false)
      toast.success('Success', {
        description: 'Snack outta here!'
      })
    }
  })

  const handleNewSnack = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setSnackId(undefined)
    setIsFormOpen(false)
  }

  const handleEditSnack = (id: string) => {
    setSnackId(id)
    setIsFormOpen(true)
  }

  const handleRemoveSnack = (id: string) => {
    setSnackId(id)
    setRemoveConfirmation(true)
  }

  const handleConfirmSnackRemoval = () => {
    if (snackId) {
      removeSnackMutation.mutate({ id: snackId })
    }
  }

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

  const handleSearch = () => {
    fetchSnacksParams?.addFilter('search', searchKeyword)
  }

  const handleClearSearch = () => {
    setSearchKeyword('')
    fetchSnacksParams?.removeFilter('search')
  }

  const isLoading = fetchSnacksQuery.isLoading

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4">
      <div className="flex items-center justify-between pr-2">
        <h2 className="text-lg font-bold">My Snacks</h2>

        <Button className="h-7 gap-1 rounded-full p-0 text-xs font-bold" onClick={handleNewSnack}>
          <PlusIcon className="size-4" />
          <span>New Snack</span>
        </Button>
      </div>

      <div className="scrollbar-thumb-black/10 scrollbar-thin overflow-x-auto">
        <Flavors
          isCurrentUser
          onClear={handleClearFlavorFilter}
          onSelect={handleSelectFlavor}
          selectedFlavors={selectedFlavors}
          title="Flavors you like"
        />
      </div>

      {Boolean(fetchSnacksQuery?.data?.nodes?.length) && (
        <Search
          onChange={(value) => setSearchKeyword(value)}
          onClear={handleClearSearch}
          onSearch={handleSearch}
          value={searchKeyword}
        />
      )}

      <div className="flex flex-col gap-4">
        {isLoading && <Loader />}

        {fetchSnacksQuery?.data?.nodes?.length === 0 && (
          <div className="text-gray-500">Your snack jar’s lonely 🥺 add one now!</div>
        )}

        {!isLoading &&
          fetchSnacksQuery.data?.nodes?.map((snack) => (
            <SnackItem key={`snack-${snack.id}`} ratings snack={snack}>
              <SnackAction onEdit={() => handleEditSnack(snack.id)} onRemove={() => handleRemoveSnack(snack.id)} />
            </SnackItem>
          ))}
      </div>

      <div>
        <Pagination
          next={fetchSnacksQuery.data?.pagination?.next}
          onClick={fetchSnacksParams.setPage}
          page={fetchSnacksParams.variables.page}
          pages={fetchSnacksQuery.data?.pagination?.pages}
          prev={fetchSnacksQuery.data?.pagination?.prev}
        />
      </div>

      {/* create/update modal */}
      <Modal
        className="max-h-[calc(100vh-80px)]"
        description="Craft your perfect snack bite"
        onClose={() => setIsFormOpen(false)}
        open={isFormOpen}
        title={snackId ? 'Update Snack' : 'Create Snack'}
      >
        <div className="max-h-[calc(100vh-180px)] flex-1 overflow-y-auto px-2">
          <SnackForm onSuccess={handleCloseForm} snackId={snackId} />
        </div>
      </Modal>

      {/* remove confirmation modal */}
      <ConfirmationModal
        confirmText="Remove Snack"
        description="Are you sure you want to remove this snack?"
        isLoading={removeSnackMutation.isPending}
        onClose={() => setRemoveConfirmation(false)}
        onConfirm={handleConfirmSnackRemoval}
        open={removeConfirmation}
        title={'Remove Snack Confirmation'}
      />
    </div>
  )
}
