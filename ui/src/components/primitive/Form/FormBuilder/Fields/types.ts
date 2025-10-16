import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Field } from '../types'

export interface FieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: Field
}
