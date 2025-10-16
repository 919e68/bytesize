/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { FilterInput, OrderInput } from '~/graphql/generated/graphql'
export type Maybe<T> = T | null | undefined

export type InputFieldRules<T extends FieldValues> = Omit<
  RegisterOptions<T, Path<T>>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>

export type ID = string
export interface MutationCallback {
  onError?: (data: any) => void
  onSuccess?: (data: any) => void
}

export interface CodedError {
  code: string
}

export interface QueryParams {
  filters: FilterInput[]
  limit: number
  order: OrderInput[]
  page: number
}
