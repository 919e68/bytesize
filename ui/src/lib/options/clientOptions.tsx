'use client'

import { Client } from '~/graphql/generated/graphql'

export const clientOptions = (clients: Client[]) => {
  return clients.map((item) => ({
    id: item.id,
    text: <div className="flex min-w-0 gap-1">{item.name}</div>,
    value: item.id
  }))
}
