import { FilterInput } from '~/graphql/generated/graphql'

export const getFilterValues = (filters: Record<string, unknown>): FilterInput[] => {
  const result: FilterInput[] = []

  const entries = Object.entries(filters)

  entries.forEach(([type, value]) => {
    if (value) {
      result.push({ type, value })
    }
  })

  return result
}

export const getFilterValue = (key: string, filters: FilterInput[]): FilterInput | undefined => {
  return filters.find((item) => item.type === key)
}
