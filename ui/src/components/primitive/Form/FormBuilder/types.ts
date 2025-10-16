/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactNode } from 'react'
import { RegisterOptions, UseFormReturn } from 'react-hook-form'

import { ComboboxOptionType } from '../Combobox'

export type { FieldValues } from 'react-hook-form'

export interface FieldGroup {
  className?: string
  fields: Field[]
}

export interface BaseField {
  children?: ReactNode
  css?: {
    container?: string
    input?: string
    label?: string
  }
  defaultValue?: string | number
  disabled?: boolean
  extensions?: string[]
  hidden?: (watch: UseFormReturn['watch']) => boolean
  id?: string
  label?: string
  name: string
  placeholder?: string
  readonly?: boolean
  rules?: Omit<RegisterOptions, 'valueAsDate' | 'disabled'>
  watch?: (watch: UseFormReturn['watch']) => any
}

export interface TextFieldType extends BaseField {
  currentValue?: () => string
  formatValue?: (value: any) => any
  type: 'text'
}

export interface FileFieldType extends BaseField {
  accepts: string
  multiple?: boolean
  onSelect?: (target: any) => void
  ref?: React.RefObject<HTMLInputElement | null>
  type: 'file'
}

export interface CheckboxFieldType extends BaseField {
  type: 'checkbox'
}

export interface DatePickerFieldType extends BaseField {
  mode?: 'single' | 'range'
  type: 'datepicker'
  withTime?: boolean
}

export interface SwitchFieldType extends BaseField {
  type: 'switch'
}

export interface PasswordFieldType extends BaseField {
  type: 'password'
}

export interface TextAreaFieldType extends BaseField {
  type: 'textarea'
}

export interface BankSelectorFieldType extends BaseField {
  multiple?: boolean
  onSelect?: (option: string | string[]) => void
  options: ComboboxOptionType[]
  renderOption?: (options: any) => ReactNode
  renderSelected?: (option: any | null) => ReactNode
  search?: boolean
  type: 'bankSelector'
}

export interface SelectFieldType extends BaseField {
  multiple?: boolean
  onSelect?: (option: string | string[]) => void
  options: ComboboxOptionType[]
  renderOption?: (options: any) => ReactNode
  renderSelected?: (option: any | null) => ReactNode
  search?: boolean
  type: 'select'
}

export interface CustomFieldType extends BaseField {
  component: ReactNode
  type: 'custom'
}

export type Field =
  | TextFieldType
  | PasswordFieldType
  | TextAreaFieldType
  | SelectFieldType
  | CheckboxFieldType
  | SwitchFieldType
  | BankSelectorFieldType
  | CustomFieldType
  | FileFieldType
  | DatePickerFieldType
