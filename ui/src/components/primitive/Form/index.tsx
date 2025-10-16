/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Fragment, ReactNode } from 'react'
import {
  Control,
  Controller,
  FormProvider,
  FieldValues as RHFFieldValues,
  RegisterOptions,
  UseFormReturn,
  useFormContext
} from 'react-hook-form'

import { FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Switch } from '~/components/ui/switch'
import { Textarea } from '~/components/ui/textarea'
import { cn } from '~/lib/utils'

export type FieldValues = Record<string, any>

export interface BaseField {
  css?: { container?: string }
  disabled?: boolean
  key: string
  label?: string
  placeholder?: string
  rules?: Omit<RegisterOptions, 'valueAsDate' | 'disabled'>
}

export interface TextField extends BaseField {
  props: React.ComponentProps<typeof Input>
  type: 'text'
}

export interface PasswordField extends BaseField {
  props: React.ComponentProps<typeof Input>
  type: 'password'
}

export interface TextAreaField extends BaseField {
  props: React.ComponentProps<typeof Textarea>
  type: 'textarea'
}

export interface SwitchField extends BaseField {
  description?: string
  props: React.ComponentProps<typeof Switch>
  type: 'switch'
}

export interface CustomField extends BaseField {
  render: (ctx: { control: Control }) => React.ReactNode
  type: 'custom'
}

export type FieldItem = TextField | PasswordField | TextAreaField | SwitchField | CustomField

export interface FieldGroup {
  className?: string
  fields: FieldItem[]
}

interface FormProps {
  action?: ReactNode
  className?: string
  form: UseFormReturn<FieldValues>
  groups: FieldGroup[]
  mode?: 'create' | 'update'
  onSubmit: (values: FieldValues) => void
  values?: FieldValues
}

export const Form = ({ action, className, form, groups, onSubmit }: FormProps) => {
  const { handleSubmit } = form

  const handleFormSubmit = (values: RHFFieldValues) => {
    onSubmit(values)
  }

  return (
    <FormProvider {...form}>
      <form className={cn('space-y-4', className)} onSubmit={handleSubmit(handleFormSubmit)}>
        {groups.map((group, idx) => (
          <div className={cn('flex gap-2', group.className)} key={idx}>
            {group.fields
              .filter((item) => !item.disabled)
              .map((field) => (
                <FormField field={field} key={field.key} />
              ))}
          </div>
        ))}
        {action}
      </form>
    </FormProvider>
  )
}

export const FormField = ({ field }: { field: FieldItem }) => {
  const { control } = useFormContext()

  return (
    <div className={cn('flex flex-1 flex-col gap-1', field.css?.container)}>
      {field.label && (
        <label className="text-muted-foreground text-sm font-medium select-none" htmlFor={field.key}>
          {field.label}
        </label>
      )}

      {field.type === 'custom' ? (
        field.render({ control })
      ) : (
        <Fragment>
          <Controller
            control={control}
            name={field.key}
            render={({ field: rhfField, fieldState }) => (
              <div className="relative flex flex-col">
                {field.type === 'text' && (
                  <Input
                    id={field.key}
                    {...field.props}
                    {...rhfField}
                    placeholder={field.placeholder}
                    value={rhfField.value ?? ''}
                  />
                )}

                {field.type === 'password' && (
                  <Input
                    id={field.key}
                    {...field.props}
                    {...rhfField}
                    placeholder={field.placeholder}
                    type="password"
                    value={rhfField.value ?? ''}
                  />
                )}

                {field.type === 'textarea' && (
                  <Textarea
                    id={field.key}
                    {...field.props}
                    {...rhfField}
                    className="break-all whitespace-pre-wrap"
                    value={rhfField.value ?? ''}
                    wrap="hard"
                  />
                )}

                {field.type === 'switch' && (
                  <div className="bg-input/30 border-input flex h-9 items-center justify-between rounded-md border px-3">
                    <label className="text-muted-foreground text-sm select-none" htmlFor={field.key}>
                      {field.description}
                    </label>

                    <Switch
                      checked={Boolean(rhfField.value)}
                      className="disabled:opacity-100 data-[state=checked]:bg-green-600"
                      disabled={field.disabled}
                      id={rhfField.name}
                      onCheckedChange={(checked) => rhfField.onChange(checked)}
                    />
                  </div>
                )}

                {fieldState.error && <FormMessageError message={fieldState.error.message} />}
              </div>
            )}
            rules={field.rules}
          />
        </Fragment>
      )}
    </div>
  )
}

export const FormMessageError = ({ message }: { message: string | undefined }) => (
  <FormMessage className="absolute right-0 -bottom-5 text-[11px]">{message}</FormMessage>
)
