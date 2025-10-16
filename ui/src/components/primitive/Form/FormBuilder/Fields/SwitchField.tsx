import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { FormLabel } from '~/components/ui/form'
import { Switch } from '~/components/ui/switch'

import { SwitchFieldType } from '../types'

interface SwitchFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: SwitchFieldType
}

export const SwitchField = ({ control, field }: SwitchFieldProps) => {
  // return <Switch checked={control.value} onCheckedChange={control.onChange} />
  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={Boolean(control.value)}
        className="disabled:opacity-100"
        disabled={field.disabled}
        id={field.name}
        onCheckedChange={(checked) => control.onChange(checked)}
      />
      <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
    </div>
  )
}
