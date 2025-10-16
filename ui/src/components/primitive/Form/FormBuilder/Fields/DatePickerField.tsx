import { format, set } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Fragment, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

import { DatePickerFieldType } from '../types'

interface DatePickerFieldProps {
  control: ControllerRenderProps<FieldValues, string>
  field: DatePickerFieldType
}

export const DatePickerField = ({ control, field }: DatePickerFieldProps) => {
  const isRange = field.mode === 'range'
  const withTime = field.withTime

  const [from, setFrom] = useState<Date>(control.value ? new Date(control.value) : new Date())
  const [fromTime, setFromTime] = useState('00:00')
  const [toTime, setToTime] = useState('00:00')
  const [open, setOpen] = useState(false) // control popover

  const handleSingleChange = (date: Date | undefined) => {
    if (!date) return control.onChange(undefined)

    const newFrom = set(from, {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    })
    setFrom(newFrom)
    control.onChange(newFrom)
    setOpen(false) // ✅ close popover after selection
  }

  const handleRangeChange = (range: DateRange | undefined) => {
    if (!range?.from || !range?.to) return control.onChange(undefined)

    const [fromHours, fromMinutes] = fromTime.split(':').map(Number)
    const [toHours, toMinutes] = toTime.split(':').map(Number)

    const from = new Date(range.from)
    from.setHours(fromHours)
    from.setMinutes(fromMinutes)

    const to = new Date(range.to)
    to.setHours(toHours)
    to.setMinutes(toMinutes)

    const formatted = {
      from: format(from, 'yyyy-MM-dd HH:mm:ss'),
      to: format(to, 'yyyy-MM-dd HH:mm:ss')
    }

    control.onChange(formatted)
    setOpen(false) // ✅ close popover after selection
  }

  const handleTimeChange = (value: string) => {
    const time = value.split(':').map(Number)
    setFrom(set(from, { hours: time[0], minutes: time[1] }))
  }

  const selected = control.value

  return (
    <div className={cn('flex w-full flex-col gap-2', field.css?.container)}>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            className={cn('relative w-full bg-blue-200 text-left font-normal')}
            variant="outline"
          >
            {isRange ? (
              selected?.from && selected?.to ? (
                <>
                  {format(selected.from, 'LLL dd, y')} - {format(selected.to, 'LLL dd, y')}
                </>
              ) : (
                <span className="w-full">Pick a date range</span>
              )
            ) : selected ? (
              <span className="w-full">{format(new Date(from), 'MMM, d, yyyy @ h:mm a')}</span>
            ) : (
              <span className="text-muted-foreground w-full">
                Pick a date {field.withTime && 'and time.'}
              </span>
            )}
            <CalendarIcon className="absolute right-3 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="space-y-2 p-4">
          {isRange ? (
            <>
              <Calendar
                captionLayout="dropdown"
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                mode="range"
                numberOfMonths={2}
                onSelect={handleRangeChange}
                required
                selected={selected}
              />
              {withTime && (
                <div className="flex gap-2">
                  <div>
                    <label className="mb-1 block text-sm">From Time</label>
                    <input
                      className="input"
                      onChange={(e) => setFromTime(e.target.value)}
                      type="time"
                      value={fromTime}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm">To Time</label>
                    <input
                      className="input"
                      onChange={(e) => setToTime(e.target.value)}
                      type="time"
                      value={toTime}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <Fragment>
              {withTime && (
                <div className="flex flex-col gap-3">
                  <Label className="px-1" htmlFor="time-picker">
                    Time
                  </Label>
                  <Input
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    id="time-picker"
                    onChange={(e) => handleTimeChange(e.target.value)}
                    step="1"
                    type="time"
                    value={format(from, 'HH:mm')}
                  />
                </div>
              )}
              <Calendar
                captionLayout="dropdown"
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                mode="single"
                numberOfMonths={1}
                onSelect={handleSingleChange}
                selected={selected}
              />
            </Fragment>
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
