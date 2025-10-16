import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Checkbox } from '~/components/ui/checkbox'
import { FormLabel } from '~/components/ui/form'
import { cn } from '~/lib/utils'

import { CheckboxFieldType } from '../types'

interface CheckboxFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: CheckboxFieldType
}

export const CheckboxField = ({ control, field }: CheckboxFieldProps) => {
  return (
    <div className={cn('flex h-9 w-full flex-row items-center gap-2', field.css?.container)}>
      <Checkbox
        checked={Boolean(control.value)}
        disabled={field.disabled}
        id={field.name}
        onCheckedChange={(checked) => control.onChange(checked)}
      />
      <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
    </div>
  )
}
