import { DocumentNode } from 'graphql'
import { cookies } from 'next/headers'

import { API_URL } from '~/constants'

export const graphqlReqServer = async <TType, TVariable = unknown>(graphqlQuery: DocumentNode, variables?: TVariable): Promise<TType> => {
  const operationName = graphqlQuery.definitions.find((def) => def.kind === 'OperationDefinition')?.name?.value
  const query = graphqlQuery.loc?.source.body as string
  const authHeader: Record<string, string> = {}

  if (typeof window === 'undefined') {
    const cookieStore = await cookies()
    const authToken = cookieStore.get('auth_token')?.value

    if (authToken) {
      authHeader['Authorization'] = `Bearer ${authToken}`
    }
  }

  return fetch(`${API_URL}/graphql`, {
    body: JSON.stringify({ operationName, query, variables }),
    headers: {
      'Content-Type': 'application/json',
      ...authHeader
    },
    method: 'POST'
  }).then((res) => res.json())
}
