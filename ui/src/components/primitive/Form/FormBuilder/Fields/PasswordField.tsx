import { FC } from 'react'

import { Input } from '~/components/ui/input'

import { FieldProps } from './types'

export const PasswordField: FC<FieldProps> = ({ control, field }) => {
  return (
    <Input
      {...control}
      className={field.css?.input}
      readOnly={field.readonly}
      type={field.type}
      value={control.value ?? ''}
    />
  )
}
