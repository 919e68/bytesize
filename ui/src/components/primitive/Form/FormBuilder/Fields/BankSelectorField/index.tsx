import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { BankSelectorFieldType } from '../../types'
import { CustomBankSelector } from './CustomBankSelector'

interface BankSelectorFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: BankSelectorFieldType
}

export const BankSelectorField = ({ control, field }: BankSelectorFieldProps) => {
  return (
    <CustomBankSelector
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
