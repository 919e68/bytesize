'use client'

import { FC } from 'react'
import { Control, Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { FieldGroup, FieldItem, FieldValues, Form, FormMessageError } from '~/components/primitive/Form'
import { ContentLoader } from '~/components/shared/ContentLoader'
import { ErrorRenderer } from '~/components/shared/ErrorRenderer'
import { Button } from '~/components/ui/button'
import { Snack } from '~/graphql/generated/graphql'
import { useCreateSnack } from '~/graphql/hooks/snack/useCreateSnack'
import { useFetchSnack } from '~/graphql/hooks/snack/useFetchSnack'
import { useUpdateSnack } from '~/graphql/hooks/snack/useUpdateSnack'
import { CodedError } from '~/lib/types/global'
import { cn } from '~/lib/utils'

import { FlavorSelection } from './FlavorSelection'
import { IconSelection } from './IconSelection'

interface SnackFormProps {
  onSuccess?: () => void
  snackId?: string
}

const getDefaultValues = (mode: string, snack?: Snack) => {
  if (mode === 'update' && snack) {
    return {
      description: snack.description,
      flavorIds: snack.snackFlavors.map((item) => item.flavor.id),
      icon: snack.icon,
      name: snack.name
    }
  }

  return {
    description: '',
    flavorIds: [],
    icon: '',
    name: ''
  }
}

export const SnackForm: FC<SnackFormProps> = ({ onSuccess, snackId }) => {
  const mode = !snackId ? 'create' : 'update'

  const mutationCallback = {
    onError: (errors: CodedError[]) => {
      toast.error('Error', {
        description: <ErrorRenderer errors={errors} />
      })
    },
    onSuccess: () => {
      form.reset()
      onSuccess?.()
      toast.success('Success', {
        description: `Snack successfully ${mode === 'create' ? 'added' : 'updated'}.`
      })
    }
  }

  const fetchSnackQuery = useFetchSnack(snackId!)
  const snack = fetchSnackQuery.data

  const form = useForm<FieldValues>({
    values: getDefaultValues(mode, snack)
  })

  const createSnackMutation = useCreateSnack(mutationCallback)
  const updateSnackMutation = useUpdateSnack(mutationCallback)

  const iconField: FieldItem = {
    key: 'icon',
    label: 'Icon',
    render: ({ control }: { control: Control }) => (
      <Controller
        control={control}
        name="icon"
        render={({ field, fieldState }) => (
          <div className="relative flex flex-col">
            <IconSelection onChange={field.onChange} value={field.value} />
            {fieldState.error && <FormMessageError message={fieldState.error.message} />}
          </div>
        )}
        rules={{ required: 'Icon is required' }}
      />
    ),
    type: 'custom'
  }

  const flavorField: FieldItem = {
    key: 'flavorIds',
    label: 'Flavor',
    render: ({ control }: { control: Control }) => (
      <Controller
        control={control}
        name="flavorIds"
        render={({ field, fieldState }) => (
          <div className="relative flex flex-col">
            <FlavorSelection onChange={field.onChange} value={field.value} />
            {fieldState.error && <FormMessageError message={fieldState.error.message} />}
          </div>
        )}
        rules={{ required: 'Flavor is required' }}
      />
    ),
    type: 'custom'
  }

  const fieldGroups: FieldGroup[] = [
    {
      fields: [iconField]
    },
    {
      fields: [
        {
          key: 'name',
          label: 'Name',
          props: {},
          rules: {
            required: 'Name is required'
          },
          type: 'text'
        }
      ]
    },
    {
      fields: [
        {
          key: 'description',
          label: 'Description',
          props: {},
          type: 'textarea'
        }
      ]
    },
    {
      fields: [flavorField]
    }
  ]

  const handleSubmit = (attributes: FieldValues) => {
    if (mode === 'create') {
      createSnackMutation.mutate({ attributes })
    } else if (mode === 'update' && snack) {
      updateSnackMutation.mutate({ attributes, id: snack.id })
    }
  }

  const isLoading = createSnackMutation.isPending || updateSnackMutation.isPending

  const action = (
    <div className="flex py-4">
      <Button className="w-full rounded-full" disabled={isLoading} type="submit">
        {isLoading ? 'Whipping up your snack...' : 'Save'}
      </Button>
    </div>
  )

  if (fetchSnackQuery.isLoading) {
    return (
      <ContentLoader>
        <div className="flex flex-1 flex-col gap-4">
          <div className="h-15 w-full rounded-lg bg-orange-50"></div>
          <div className="h-15 w-full rounded-lg bg-orange-50"></div>
          <div className="h-30 w-full rounded-lg bg-orange-50"></div>
          <div className="h-15 w-full rounded-lg bg-orange-50"></div>
          <div className="h-15 w-full rounded-lg bg-orange-50"></div>
        </div>
      </ContentLoader>
    )
  }

  return <Form action={action} className={cn('flex flex-col')} form={form} groups={fieldGroups} onSubmit={handleSubmit} />
}
