import { ReactNode } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'

import { FormProvider } from '~/components/ui/form'
import { cn } from '~/lib/utils'

import { FormField } from './FormField'
import { FieldGroup, FieldValues } from './types'

export type ActionType = Pick<UseFormReturn['formState'], 'isValid' | 'isDirty' | 'dirtyFields'>

export type Action = (formState: ActionType) => ReactNode

interface FormBuilderProps {
  action?: Action
  className?: string
  fields: FieldGroup[]
  name: string
  onSubmit?: (values: FieldValues) => void
  values?: FieldValues | undefined
}

export const Form = ({
  action,
  className,
  fields,
  name,
  onSubmit,
  values = {}
}: FormBuilderProps) => {
  const defaultValues = Object.fromEntries(
    (fields ?? []).flatMap((group) =>
      (group.fields ?? []).map((field) => {
        const hasValue = Object.prototype.hasOwnProperty.call(values ?? {}, field.name)
        let defaultValue: unknown = ''
        if (field.type === 'checkbox') defaultValue = false
        if (field.type === 'switch') defaultValue = false
        return [field.name, hasValue ? values?.[field.name] : defaultValue]
      })
    )
  )

  const form = useForm({ defaultValues, mode: 'all' })

  const handleSubmit = (data: FieldValues) => {
    onSubmit?.(data)
  }

  return (
    <FormProvider {...form}>
      <form
        className={cn('flex w-full flex-col gap-4 px-1', className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {fields.map((group, index) => {
          const visibleFields = group.fields.filter(
            (field) =>
              !(typeof field.hidden === 'function' ? field.hidden(form.watch) : field.hidden)
          )

          if (visibleFields.length === 0) return null

          return (
            <div
              className={cn(group.className ? group.className : 'flex flex-col gap-2 lg:flex-row')}
              key={index}
            >
              {visibleFields.map((field, fieldIndex) => {
                if (typeof field.watch === 'function') {
                  field.watch(form.watch)
                }

                return (
                  <FormField field={field} form={form} key={`${name}_form_line_${fieldIndex}`} />
                )
              })}
            </div>
          )
        })}

        <div className="mt-2 flex flex-col gap-2">
          {action &&
            action({
              dirtyFields: form.formState.dirtyFields,
              isDirty: form.formState.isDirty,
              isValid: form.formState.isValid
            })}
        </div>
      </form>
    </FormProvider>
  )
}
