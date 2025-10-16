'use client'

import { FC } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner'

import { FieldGroup, FieldValues, Form } from '~/components/primitive/Form'
import { ErrorRenderer } from '~/components/shared/ErrorRenderer'
import { Button } from '~/components/ui/button'
import { useRegisterUser } from '~/graphql/hooks/auth/useRegisterUser'
import { CodedError } from '~/lib/types/global'
import { cn } from '~/lib/utils'
import { transformData } from '~/lib/utils/transformer'

interface RegistrationFormProps {
  onSuccess?: () => void
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ onSuccess }) => {
  const form = useForm<FieldValues>({
    values: {
      confirmPassword: '',
      name: '',
      password: '',
      username: ''
    }
  })

  const watchedValues = useWatch({ control: form.control })

  const registerUserMutation = useRegisterUser({
    onError: (errors: CodedError[]) => {
      toast.error('Error', {
        description: <ErrorRenderer errors={errors} />
      })
    },
    onSuccess: () => {
      onSuccess?.()
      form.reset()
      toast.success('Success', {
        description: `You're all set! Your account's ready to go.`
      })
    }
  })

  const fieldGroups: FieldGroup[] = [
    {
      fields: [
        {
          key: 'username',
          label: 'Username',
          props: {},
          rules: { required: 'Username is required' },
          type: 'text'
        }
      ]
    },
    {
      fields: [
        {
          key: 'name',
          label: 'Name',
          props: {},
          rules: { required: 'Name is required' },
          type: 'text'
        }
      ]
    },
    {
      fields: [
        {
          key: 'password',
          label: 'Password',
          props: {},
          rules: {
            required: 'Password is required',
            validate: (value) => value.length >= 8 || 'Password must be at least 8 characters long'
          },
          type: 'password'
        }
      ]
    },
    {
      fields: [
        {
          key: 'confirmPassword',
          label: 'Confirm Password',
          props: {},
          rules: {
            required: 'Password is required',
            validate: (value) => value === watchedValues.password || 'Passwords do not match'
          },
          type: 'password'
        }
      ]
    }
  ]

  const handleSubmit = (values: FieldValues) => {
    registerUserMutation.mutate({ attributes: transformData(values, {}, ['confirmPassword']) })
  }

  const action = (
    <div className="flex py-4">
      <Button className="w-full rounded-full" type="submit">
        Create Account
      </Button>
    </div>
  )

  return <Form action={action} className={cn('flex flex-col')} form={form} groups={fieldGroups} onSubmit={handleSubmit} />
}
