import { useState } from 'react'

import { FilterInput, SortDirectionEnum } from '~/graphql/generated/graphql'
import { QueryParams } from '~/lib/types/global'

export const DEFAULT_FETCH_PARAMS = {
  filters: [],
  limit: 20,
  order: [{ direction: SortDirectionEnum.Desc, field: 'id' }],
  page: 1
}

export const useFetchArgs = (defaultVariables?: Partial<QueryParams>) => {
  const [variables, setVariables] = useState<QueryParams>({ ...DEFAULT_FETCH_PARAMS, ...defaultVariables })

  const addFilter = (type: string, value: unknown) => {
    setVariables((prev) => ({ ...prev, filters: [...prev.filters.filter((item) => item.type != type), { type, value }] }))
  }

  const removeFilter = (type: string) => {
    setVariables((prev) => ({ ...prev, filters: [...prev.filters.filter((item) => item.type != type)] }))
  }

  const addOrder = (field: string, directions: SortDirectionEnum[]) => {
    if (!directions.length) return
    const [direction] = directions
    setVariables((prev) => ({ ...prev, order: [...prev.order.filter((item) => item.field !== field), { direction, field }] }))
  }

  const removeOrder = (field: string) => {
    setVariables((prev) => ({ ...prev, order: [...prev.order.filter((item) => item.field != field)] }))
  }

  const setPage = (page: number) => {
    setVariables((prev) => ({ ...prev, page }))
  }

  const setFilters = (filters: FilterInput[]) => {
    setVariables((prev) => ({ ...prev, filters }))
  }

  return {
    addFilter,
    addOrder,
    removeFilter,
    removeOrder,
    setFilters,
    setPage,
    variables
  }
}

export type UseFetchArgsReturn = ReturnType<typeof useFetchArgs>
