/* eslint-disable @typescript-eslint/no-explicit-any */

type TransformConfig<T> = {
  [K in keyof T]?: {
    name?: string
    transform: (value: T[K]) => any
  }
}

export const transformData = <T extends Record<string, any>>(
  obj?: T,
  config?: TransformConfig<T>,
  omitKeys: (keyof T)[] = []
): Record<string, any> => {
  const result: Record<string, any> = {}
  if (!obj) return result

  for (const key in obj) {
    if (omitKeys.includes(key)) continue

    const value = obj[key]
    const keyConfig = config?.[key]

    if (keyConfig) {
      const transformedKey = keyConfig.name ?? key
      result[transformedKey] = keyConfig.transform?.(value) ?? value
    } else {
      result[key] = value
    }
  }

  return result
}
