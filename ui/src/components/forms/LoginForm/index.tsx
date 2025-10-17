'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { FieldGroup, FieldValues, Form } from '~/components/primitive/Form'
import { ErrorRenderer } from '~/components/shared/ErrorRenderer'
import { Button } from '~/components/ui/button'
import { useCurrentUser } from '~/context/CurrentUserContext'
import { useLoginUser } from '~/graphql/hooks/auth/useLoginUser'
import { CodedError } from '~/lib/types/global'
import { cn } from '~/lib/utils'

interface LoginFormProps {
  onSuccess?: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onSuccess }) => {
  const { setUser } = useCurrentUser()
  const form = useForm<FieldValues>({
    values: {
      password: '',
      username: ''
    }
  })

  const loginUserMutation = useLoginUser({
    onError: (errors: CodedError[]) => {
      toast.error('Error', {
        description: <ErrorRenderer errors={errors} />
      })
    },
    onSuccess: (data) => {
      setUser(data.user)
      onSuccess?.()
      form.reset()
      toast.success('Success', {
        description: `You're in! Welcome back ${data.user.name} 👋`
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
          key: 'password',
          label: 'Password',
          props: {},
          rules: {
            required: 'Password is required'
          },
          type: 'password'
        }
      ]
    }
  ]

  const handleSubmit = (values: FieldValues) => {
    loginUserMutation.mutate({ password: values.password, username: values.username })
  }

  const action = (
    <div className="flex py-4">
      <Button className="w-full rounded-full" disabled={loginUserMutation.isPending} type="submit">
        {loginUserMutation.isPending ? 'Logging you in...' : 'Login'}
      </Button>
    </div>
  )

  return <Form action={action} className={cn('flex flex-col')} form={form} groups={fieldGroups} onSubmit={handleSubmit} />
}
