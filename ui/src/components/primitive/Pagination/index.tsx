import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { FC, useMemo } from 'react'

import { Button } from '~/components/ui/button'
import { PaginationContent, PaginationEllipsis, PaginationItem, Pagination as ShadPagination } from '~/components/ui/pagination'
import { Maybe } from '~/lib/types/global'

interface PaginationProps {
  next: boolean | null | undefined
  onClick: (page: number) => void
  page: number
  pages: Maybe<number> | undefined
  prev: boolean | null | undefined
}

export const Pagination: FC<PaginationProps> = ({ next, onClick, page, pages, prev }) => {
  const paginationCount = 5

  const groupStart = Math.floor((page - 1) / paginationCount) * paginationCount + 1
  const pageNumbers = useMemo(() => {
    return Array.from({ length: paginationCount }, (_, i) => groupStart + i).filter((p) => p <= pages!)
  }, [groupStart, pages])

  if (!pages)
    return (
      <ShadPagination>
        <PaginationContent>
          {[...Array(5)].map((_, i) => (
            <PaginationItem key={i}>
              <Button disabled variant="ghost">
                {i === 2 ? (
                  <PaginationEllipsis />
                ) : i === 0 ? (
                  <ChevronFirst />
                ) : i === 1 ? (
                  <ChevronLeft />
                ) : i === 3 ? (
                  <ChevronRight />
                ) : (
                  <ChevronLast />
                )}
              </Button>
            </PaginationItem>
          ))}
        </PaginationContent>
      </ShadPagination>
    )

  return (
    <div className="flex">
      <ShadPagination>
        <PaginationContent>
          <PaginationItem>
            <Button className="hover:bg-orange-100" disabled={!prev} onClick={() => onClick(1)} variant="ghost">
              <ChevronFirst />
            </Button>
          </PaginationItem>

          <PaginationItem>
            <Button
              className="hover:bg-orange-100"
              disabled={groupStart <= 1}
              onClick={() => onClick(Math.max(groupStart - paginationCount, 1))}
              variant="ghost"
            >
              <ChevronLeft />
            </Button>
          </PaginationItem>

          {pageNumbers.map((p) => (
            <PaginationItem key={p}>
              <Button className="hover:bg-orange-100" onClick={() => onClick(p)} variant={p === page ? 'default' : 'ghost'}>
                {p}
              </Button>
            </PaginationItem>
          ))}

          <PaginationItem>
            <Button
              className="hover:bg-orange-100"
              disabled={groupStart + paginationCount > pages}
              onClick={() => onClick(Math.min(groupStart + paginationCount, pages))}
              variant="ghost"
            >
              <ChevronRight />
            </Button>
          </PaginationItem>

          <PaginationItem>
            <Button className="hover:bg-orange-100" disabled={!next} onClick={() => onClick(pages!)} variant="ghost">
              <ChevronLast />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </ShadPagination>
    </div>
  )
}
