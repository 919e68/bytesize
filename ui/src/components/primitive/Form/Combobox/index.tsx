/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Check, ChevronsUpDownIcon, CircleXIcon } from 'lucide-react'
import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import { useToggle } from 'react-use'

import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '~/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

export interface ComboboxOptionType<T = unknown> {
  id: string
  object?: T
  text?: string | React.ReactNode
  uniqueSearchTerm?: string
  value?: string
}

interface ComboboxProps<T extends ComboboxOptionType> {
  align?: 'start' | 'center' | 'end'
  className?: string
  disabled?: boolean
  multiple?: boolean
  name: string
  onSelect?: (options: string | string[]) => void
  options: T[]
  placeholder?: string
  renderOption?: (option: T) => ReactNode
  renderSelected?: (option: T | null) => ReactNode
  search?: boolean
  selected?: string[] | string | { id: string }[] | { id: string }
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export interface ComboboxOptionProps<T extends ComboboxOptionType> {
  active: boolean
  onSelect: (option: T) => void
  option: T
  renderOption?: (option: T) => ReactNode
}

export const ComboboxOption = <T extends ComboboxOptionType>({
  active,
  onSelect,
  option,
  renderOption
}: ComboboxOptionProps<T>) => (
  <CommandItem key={option.id} onSelect={() => onSelect(option)} value={option.uniqueSearchTerm}>
    {renderOption?.(option) || option.text}
    <Check className={cn('ml-auto', active ? 'opacity-100' : 'opacity-0')} />
  </CommandItem>
)

export const Combobox = <T extends ComboboxOptionType>({
  align = 'start',
  className,
  disabled = false,
  multiple = false,
  onSelect,
  options,
  placeholder,
  renderOption,
  renderSelected,
  search = false,
  selected,
  side = 'bottom'
}: ComboboxProps<T>) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [openOptions, setToggleOptions] = useToggle(false)

  const normalize = (s: typeof selected): string[] =>
    Array.isArray(s)
      ? s.map((item) => (typeof item === 'string' ? item : item.id))
      : s
        ? [typeof s === 'string' ? s : s.id]
        : []

  useEffect(() => {
    setSelectedOptions(normalize(selected))
  }, [selected])

  const handleSelect = (option: T) => {
    const isSelected = selectedOptions.includes(option.id)
    let updated: string[]

    if (multiple) {
      updated = isSelected
        ? selectedOptions.filter((i) => i !== option.id)
        : [...selectedOptions, option.id]
    } else {
      updated = [option.id]
      setToggleOptions(false)
    }

    setSelectedOptions(updated)
    onSelect?.(multiple ? updated : updated[0])
  }

  const handleClear = (id: string) => {
    const updated = selectedOptions.filter((i) => i !== id)
    setSelectedOptions(updated)
    onSelect?.(multiple ? updated : '')
  }

  const renderSelectedOptions = () => {
    if (selectedOptions.length === 0) return <div>{placeholder}</div>
    if (multiple) {
      return (
        <Fragment>
          {selectedOptions.map((id) => {
            const opt = options.find((o) => o.id === id)
            if (!opt) return null
            return (
              <div className="group relative shrink-0" key={id}>
                <Badge variant="outline">{renderSelected?.(opt) ?? opt.text}</Badge>
                <span
                  className="absolute -top-1 -right-1 cursor-pointer p-1 opacity-0 transition-opacity group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClear(id)
                  }}
                >
                  <CircleXIcon className="size-[13px] rounded-full bg-white text-black dark:bg-black dark:text-white" />
                </span>
              </div>
            )
          })}
        </Fragment>
      )
    }
    const sel = options.find((o) => o.id === selectedOptions[0]) ?? null
    return renderSelected?.(sel) ?? sel?.text
  }

  return (
    <Popover onOpenChange={setToggleOptions} open={openOptions}>
      <PopoverTrigger asChild>
        <div className={cn('flex w-full flex-1', disabled && 'cursor-not-allowed')}>
          <Button
            className={cn(
              'flex flex-1 justify-between overflow-hidden',
              disabled && 'cursor-not-allowed disabled:opacity-100',
              className
            )}
            disabled={disabled}
            role="combobox"
            variant="outline"
          >
            <div className="flex max-w-full flex-nowrap gap-1 overflow-hidden">
              {renderSelectedOptions()}
            </div>
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </div>
      </PopoverTrigger>
      {!disabled && (
        <PopoverContent align={align} className="w-(--radix-popover-trigger-width) p-0" side={side}>
          <Command>
            {search && <CommandInput className="h-9" placeholder={placeholder ?? 'Search...'} />}
            <CommandList>
              <CommandEmpty>{placeholder}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <ComboboxOption
                    active={selectedOptions.includes(option.id)}
                    key={option.id}
                    onSelect={handleSelect}
                    option={option}
                    renderOption={renderOption}
                  />
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  )
}
