/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Input } from '~/components/ui/input'

import { TextFieldType } from '../types'

interface TextFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: TextFieldType
}

export const TextField = ({ control, field }: TextFieldProps) => {
  useEffect(() => {
    if (field.formatValue) {
      const formatted = field.formatValue(control.value)
      if (formatted !== control.value) {
        control.onChange(formatted)
      }
    }
  }, [field.formatValue])

  return (
    <Input
      {...control}
      className={field.css?.input}
      disabled={field.disabled}
      id={field.name}
      placeholder={field.placeholder}
      readOnly={field.readonly}
      type={field.type}
      value={control.value ?? ''}
    />
  )
}
