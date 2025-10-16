import { Eye, EyeClosed } from 'lucide-react'
import { FC } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useToggle } from 'react-use'

import { CopyWithTooltip } from '~/components/shared/CopyWithTooltip'
import {
  FormControl,
  FormControlField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/ui/form'
import { cn } from '~/lib/utils'

import {
  BankSelectorField,
  CheckboxField,
  DatePickerField,
  PasswordField,
  SelectField,
  SwitchField,
  TextAreaField,
  TextField
} from './Fields'
import { FileField } from './Fields/FileField'
import { Field } from './types'

interface FormBuilderFieldProps {
  field: Field
  form: UseFormReturn
}

export const FormField: FC<FormBuilderFieldProps> = ({ field, form }) => {
  const [isRevealed, toggleReveal] = useToggle(false)
  const type = field.type

  if (typeof field.hidden === 'function' ? field.hidden(form.watch) : field.hidden) return

  return (
    <FormControlField
      control={form.control}
      defaultValue={field.type === 'checkbox' || field.type === 'switch' ? false : ''}
      key={`${field.name}_${field.label}`}
      name={field.name}
      render={({ field: control }) => {
        return (
          <FormItem className={cn('relative flex flex-1 flex-col gap-1', field.css?.container)}>
            {field.label && (
              <FormLabel
                className={cn(field.css?.label, {
                  hidden: field.type === 'checkbox' || field.type === 'switch'
                })}
              >
                {field.label}
              </FormLabel>
            )}

            <FormControl>
              <div className="group flex flex-1 items-center">
                {type === 'text' && <TextField control={control} field={field} />}
                {type === 'textarea' && <TextAreaField control={control} field={field} />}
                {type === 'password' && (
                  <PasswordField
                    control={control}
                    field={{ ...field, type: isRevealed ? 'text' : 'password' }}
                  />
                )}
                {type === 'select' && <SelectField control={control} field={field} />}
                {type === 'bankSelector' && <BankSelectorField control={control} field={field} />}
                {type === 'checkbox' && <CheckboxField control={control} field={field} />}
                {type === 'switch' && <SwitchField control={control} field={field} />}
                {type === 'file' && <FileField control={control} field={field} />}
                {type === 'datepicker' && <DatePickerField control={control} field={field} />}

                {type === 'custom' && field.component}

                {field.extensions?.includes('copy') && (
                  <div className="absolute right-2 size-4">
                    <CopyWithTooltip value={control.value ?? ''} />
                  </div>
                )}

                {field.extensions?.includes('reveal') && (
                  <div
                    className="absolute right-2 size-4 cursor-pointer opacity-100 transition-opacity lg:opacity-0 lg:group-hover:opacity-100"
                    onClick={toggleReveal}
                  >
                    {!isRevealed ? <EyeClosed className="size-4" /> : <Eye className="size-4" />}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage className="absolute right-0 -bottom-5 text-[11px]" />
          </FormItem>
        )
      }}
      rules={field.rules}
    />
  )
}
