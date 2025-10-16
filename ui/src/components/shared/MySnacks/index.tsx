import { SortDirectionEnum } from '~/graphql/generated/graphql'
import { useFetchSnacks } from '~/graphql/hooks/snack/useFetchSnacks'
import { useFetchArgs } from '~/hooks/useFetchArgs'

import { SnackItem } from './SnackItem'

export const MySnacks = () => {
  const fetchSnacksParams = useFetchArgs({
    filters: [],
    order: [{ direction: SortDirectionEnum.Desc, field: 'id' }]
  })
  const fetchSnacksQuery = useFetchSnacks(fetchSnacksParams.variables)

  return (
    <div className="flex flex-1 flex-col gap-4">
      <h2 className="text-lg font-bold">My Snacks</h2>

      <div className="flex flex-col gap-2">
        {fetchSnacksQuery.isLoading && <div>Loading ...</div>}
        {!fetchSnacksQuery.isLoading &&
          fetchSnacksQuery.data &&
          fetchSnacksQuery.data?.nodes?.map((snack) => <SnackItem key={`snack-${snack.id}`} snack={snack} />)}
      </div>
    </div>
  )
}
