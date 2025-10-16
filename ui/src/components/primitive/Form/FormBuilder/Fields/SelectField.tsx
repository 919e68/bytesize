import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Combobox } from '../../Combobox'
import { SelectFieldType } from '../types'

interface SelectFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: SelectFieldType
}

export const SelectField = ({ control, field }: SelectFieldProps) => {
  return (
    <Combobox
      disabled={field.disabled}
      multiple={field.multiple}
      name={field.name}
      onSelect={(option) => {
        control.onChange(option)
        field.onSelect?.(option)
      }}
      options={field.options}
      placeholder={field.placeholder}
      renderOption={field.renderOption}
      renderSelected={field.renderSelected}
      search={field.search}
      selected={control.value}
    />
  )
}
