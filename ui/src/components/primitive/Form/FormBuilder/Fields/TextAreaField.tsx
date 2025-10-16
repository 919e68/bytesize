import { FC } from 'react'

import { Textarea } from '~/components/ui/textarea'

import { FieldProps } from './types'

export const TextAreaField: FC<FieldProps> = ({ control, field }) => {
  return (
    <Textarea
      {...control}
      className={field.css?.input}
      id={field.name}
      placeholder={field.placeholder}
      readOnly={field.readonly}
      value={control.value ?? ''}
    />
  )
}
