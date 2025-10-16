'use client'

import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Input } from '~/components/ui/input'
import { usePasteImage } from '~/hooks/usePasteImage'

import { FileFieldType } from '../types'

interface FileFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: FileFieldType
}

export const FileField = ({ control, field }: FileFieldProps) => {
  const createFileWithPreview = (file: File) => ({
    file,
    url: URL.createObjectURL(file)
  })

  usePasteImage((file) => {
    if (field.ref?.current) {
      const input = field.ref.current
      const currentFiles = input.files ? Array.from(input.files) : []

      const newFiles = field.multiple ? [...currentFiles, file] : [file]

      const dataTransfer = new DataTransfer()
      newFiles.forEach((f) => dataTransfer.items.add(f))

      input.files = dataTransfer.files
      input.dispatchEvent(new Event('change', { bubbles: true }))
    }
  })

  return (
    <Input
      accept={field.accepts}
      className={field.css?.input}
      disabled={field.disabled}
      id={field.name}
      multiple={field.multiple}
      onChange={(e) => {
        const files = e.target.files ? Array.from(e.target.files) : []
        const filesWithPreview = files.map(createFileWithPreview)

        control.onChange(field.multiple ? filesWithPreview : filesWithPreview[0] || null)

        if (field.onSelect) field.onSelect(filesWithPreview)
      }}
      readOnly={field.readonly}
      ref={field.ref}
      type={field.type}
    />
  )
}
