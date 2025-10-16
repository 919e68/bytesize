'use client'

import { Check } from 'lucide-react'
import React, { ReactNode, useEffect, useState } from 'react'
import { useToggle } from 'react-use'

import { Card, CardContent } from '~/components/ui/card'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '~/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { useFetchBank } from '~/graphql/hooks/bank/useFetchBank'
import { cn } from '~/lib/utils'
import { formatAccountNumber, formatDecimal } from '~/lib/utils/formatter'

export interface CustomBankSelectorOptionType<T = unknown> {
  id: string
  object?: T
  text?: string | React.ReactNode
  uniqueSearchTerm?: string
  value?: string
}

const BANK_TYPE: Record<string, string> = {
  default: 'border-black',
  GC: 'border-[#007DFE]',
  GTM: 'border-[#1CF3F3]',
  MY: 'border-[#2FF29E]'
}

interface CustomBankSelectorProps<T extends CustomBankSelectorOptionType> {
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
  selected?: string[] | string
  side?: 'top' | 'right' | 'bottom' | 'left'
}

export interface CustomBankSelectorOptionProps<T extends CustomBankSelectorOptionType> {
  active: boolean
  onSelect: (option: T) => void
  option: T
  renderOption?: (option: T) => ReactNode
}

export const CustomBankSelectorOption = <T extends CustomBankSelectorOptionType>({
  active,
  onSelect,
  option,
  renderOption
}: CustomBankSelectorOptionProps<T>) => {
  return (
    <CommandItem key={option.id} onSelect={() => onSelect(option)} value={option.uniqueSearchTerm}>
      {renderOption?.(option) || option.text}
      <Check className={cn('ml-auto', active ? 'opacity-100' : 'opacity-0')} />
    </CommandItem>
  )
}

export const CustomBankSelector = <T extends CustomBankSelectorOptionType>({
  align = 'start',
  className,
  disabled = false,
  multiple = false,
  onSelect,
  options,
  placeholder,
  renderOption,
  search = false,
  selected,
  side = 'bottom'
}: CustomBankSelectorProps<T>) => {
  const defaultSelected = Array.isArray(selected) ? selected : selected ? [selected] : []
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultSelected)
  const [openOptions, setToggleOptions] = useToggle(false)
  const [id, setId] = useState<string>('')

  const fetchBankQuery = useFetchBank(id)

  useEffect(() => {
    const selectedOption = options.find((item) => item.id === selectedOptions[0]) ?? null
    setId(selectedOption?.id ?? '')
  }, [selectedOptions, options])

  const handleSelect = (option: T) => {
    if (multiple) {
      const isSelected = selectedOptions.includes(option.id)
      const newSelectedOptions = isSelected
        ? selectedOptions.filter((item) => item !== option.id)
        : [...selectedOptions, option.id]

      setSelectedOptions(newSelectedOptions)
      onSelect?.(newSelectedOptions)
    } else {
      setSelectedOptions([option.id])
      onSelect?.(option.id)
      setToggleOptions(false)
    }
  }

  const renderSelectedOptions = () => {
    if (selectedOptions.length === 0) {
      return (
        <Card
          className={cn(
            `border-muted-foreground flex h-[64px] w-full cursor-pointer border-[1px] border-t-4 p-0 shadow-md ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`
          )}
        >
          <CardContent className="flex flex-1 items-center justify-center text-sm">
            {placeholder}
          </CardContent>
        </Card>
      )
    }

    return fetchBankQuery.isPending ? (
      'loading'
    ) : (
      <Card
        className={cn(
          `w-full border-[1px] border-t-4 p-0 text-sm shadow-md ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
          BANK_TYPE[fetchBankQuery.data?.bankType.code || 0],
          className
        )}
      >
        <CardContent className="relative flex justify-between p-2">
          <div className="flex-1">
            <div className="flex flex-col">
              <div className="flex gap-2">{fetchBankQuery.data?.code}</div>
              <p className="font-medium">
                {formatAccountNumber(
                  fetchBankQuery.data?.bankType.code || '',
                  fetchBankQuery.data?.accountNumber || '-'
                )}
              </p>
            </div>
          </div>

          <div className="flex-1 text-end">
            <div className="flex flex-col">
              <p className="font-bold">{fetchBankQuery.data?.accountName || '-'}</p>
              <p className="text-base font-bold">
                ₱ {formatDecimal(fetchBankQuery.data?.balance ?? 0)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Popover onOpenChange={setToggleOptions} open={openOptions}>
      <PopoverTrigger
        asChild
        onClick={(e) => {
          if (disabled) e.preventDefault()
        }}
      >
        <div className="w-full">
          {renderSelectedOptions()}
          {/* <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </div>
      </PopoverTrigger>

      <PopoverContent align={align} className="w-(--radix-popover-trigger-width) p-0" side={side}>
        <Command>
          {search && <CommandInput className="h-9" placeholder={placeholder ?? 'Search...'} />}
          <CommandList>
            <CommandEmpty>{placeholder}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CustomBankSelectorOption
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
    </Popover>
  )
}
