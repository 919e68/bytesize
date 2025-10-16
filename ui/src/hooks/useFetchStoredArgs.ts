import { useLocalStorage } from 'react-use'

import { FilterInput, SortDirectionEnum } from '~/graphql/generated/graphql'
import { QueryParams } from '~/lib/types/global'
import { time } from '~/lib/utils/time'

export const DEFAULT_FETCH_PARAMS: QueryParams = {
  filters: [],
  limit: 20,
  order: [{ direction: SortDirectionEnum.Desc, field: 'id' }],
  page: 1
}

type StorageKey = string

interface StoredValue {
  expiresAt?: string
  params: QueryParams
}

export const useFetchStoredArgs = (storageKey?: StorageKey, defaultVariables?: Partial<QueryParams>) => {
  const [stored, setStored] = useLocalStorage<StoredValue>(storageKey ?? '', {
    params: { ...DEFAULT_FETCH_PARAMS, ...defaultVariables }
  })

  // check if expired
  const isExpired = stored?.expiresAt && time().isAfter(time(stored.expiresAt))
  if (isExpired) {
    setStored({
      params: { ...DEFAULT_FETCH_PARAMS, ...defaultVariables }
    })
  }

  const variables = stored?.params ?? { ...DEFAULT_FETCH_PARAMS, ...defaultVariables }

  const updateParams = (updater: (prev: QueryParams) => QueryParams) => {
    setStored({
      params: updater(variables)
    })
  }

  // helpers
  const addFilter = (type: string, value: unknown) => {
    updateParams((prev) => ({
      ...prev,
      filters: [...prev.filters.filter((item) => item.type !== type), { type, value }],
      page: 1
    }))
  }

  const removeFilter = (type: string) => {
    updateParams((prev) => ({
      ...prev,
      filters: prev.filters.filter((item) => item.type !== type),
      page: 1
    }))
  }

  const addOrder = (field: string, directions: SortDirectionEnum[]) => {
    if (!directions.length) return
    const [direction] = directions
    updateParams((prev) => ({
      ...prev,
      order: [...prev.order.filter((item) => item.field !== field), { direction, field }]
    }))
  }

  const removeOrder = (field: string) => {
    updateParams((prev) => ({
      ...prev,
      order: prev.order.filter((item) => item.field !== field)
    }))
  }

  const setPage = (page: number) => {
    updateParams((prev) => ({ ...prev, page }))
  }

  const setFilters = (filters: FilterInput[]) => {
    updateParams((prev) => ({
      ...prev,
      filters,
      page: 1
    }))
  }

  const reset = () => {
    updateParams(() => ({
      ...DEFAULT_FETCH_PARAMS,
      ...defaultVariables,
      page: 1
    }))
  }

  return {
    addFilter,
    addOrder,
    removeFilter,
    removeOrder,
    reset,
    setFilters,
    setPage,
    variables
  }
}

export type UseFetchArgsReturn = ReturnType<typeof useFetchStoredArgs>
