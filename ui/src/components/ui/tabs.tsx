/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '~/lib/utils'

// Tailwind Variants
const tabsListVariants = cva('inline-flex', {
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: 'bg-muted text-muted-foreground h-9 w-fit items-center justify-center rounded-lg p-[3px]',
      underline: 'border-b gap-4 rounded-none bg-transparent p-0 bg-background',
      vercel: 'relative flex space-x-[6px] items-center border-b'
    }
  }
})

const tabsTriggerVariants = cva('inline-flex text-sm transition-colors duration-300', {
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default:
        'dark:data-[state=active]:text-foreground text-muted-foreground h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
      underline:
        'rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary pb-1',
      vercel:
        'px-3 py-2 cursor-pointer text-muted-foreground dark:text-muted-foreground data-[state=active]:text-foreground dark:data-[state=active]:text-foreground'
    }
  }
})

type TabsVariant = VariantProps<typeof tabsTriggerVariants>['variant']

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TabsVariant
}

function Tabs({ children, className, variant = 'default', ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root className={cn('flex flex-col', className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        if (child.type === React.Fragment) return child

        return React.cloneElement(child as React.ReactElement<{ variant?: TabsVariant }>, {
          variant
        })
      })}
    </TabsPrimitive.Root>
  )
}

interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  variant?: TabsVariant
}

function TabsList({ children, className, variant = 'default', ...props }: TabsListProps) {
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [activeStyle, setActiveStyle] = React.useState({ left: '0px', width: '0px' })
  const [hoverStyle, setHoverStyle] = React.useState({ left: '0px', opacity: 0, width: '0px' })

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const firstElement = tabRefs.current.find((el) => el?.dataset.state === 'active')
      if (firstElement) {
        const { offsetLeft, offsetWidth } = firstElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`
        })
      }
    })
  }, [])

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      const active = tabRefs.current.find((el) => el?.dataset.state === 'active')
      if (active) {
        setActiveStyle({
          left: `${active.offsetLeft}px`,
          width: `${active.offsetWidth}px`
        })
      }
    })

    tabRefs.current.forEach((el) => {
      if (el) observer.observe(el, { attributeFilter: ['data-state'], attributes: true })
    })

    return () => observer.disconnect()
  }, [children])

  return (
    <TabsPrimitive.List className={cn(tabsListVariants({ variant }), className)} {...props}>
      {variant === 'vercel' && (
        <>
          {/* Hover highlight */}
          <div
            className="pointer-events-none absolute flex h-[30px] items-center rounded-[6px] bg-[#0e0f1114] transition-all duration-300 ease-out dark:bg-[#ffffff1a]"
            style={hoverStyle}
          />
          {/* Active underline */}
          <div
            className="absolute bottom-[-1px] h-[2px] bg-[#0e0f11] transition-all duration-300 ease-out dark:bg-white"
            style={activeStyle}
          />
        </>
      )}

      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        return React.cloneElement(child as React.ReactElement<any>, {
          onMouseEnter: () => {
            const el = tabRefs.current[index]
            if (el) {
              setHoverStyle({
                left: `${el.offsetLeft}px`,
                opacity: 1,
                width: `${el.offsetWidth}px`
              })
            }
          },
          onMouseLeave: () => setHoverStyle((prev) => ({ ...prev, opacity: 0 })),
          ref: (el: HTMLButtonElement) => {
            tabRefs.current[index] = el
          },
          variant
        })
      })}
    </TabsPrimitive.List>
  )
}

interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  variant?: TabsVariant
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(({ className, variant = 'default', ...props }, ref) => (
  <TabsPrimitive.Trigger className={cn(tabsTriggerVariants({ variant }), className)} ref={ref} {...props} />
))
TabsTrigger.displayName = 'TabsTrigger'

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn('flex-1 outline-none', className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
