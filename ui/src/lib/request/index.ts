import { DocumentNode } from 'graphql'

export const graphqlReq = <TType, TVariable = unknown>(
  graphqlQuery: DocumentNode,
  variables?: TVariable,
  options: { url?: string } = {}
): Promise<TType> => {
  return new Promise(async (resolve, reject) => {
    const operationName = graphqlQuery.definitions.find((def) => def.kind === 'OperationDefinition')?.name?.value
    const query = graphqlQuery.loc?.source.body as string
    const authHeader: Record<string, string> = {}

    if (typeof window !== 'undefined') {
      const authToken = localStorage.getItem('authToken')
      if (authToken) authHeader['Authorization'] = `Bearer ${authToken}`
    }

    return fetch(options.url || '/graphql', {
      body: JSON.stringify({ operationName, query, variables }),
      headers: {
        'Content-Type': 'application/json',
        ...authHeader
      },
      method: 'POST'
    })
      .then((res) => res.json())
      .then(({ data, errors }) => {
        if (errors) {
          reject(errors)
        }

        resolve(data as TType)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const graphqlReqWithFile = <TType, TVariable = Record<string, unknown>>(
  query: DocumentNode,
  variables?: TVariable,
  files?: File[]
): Promise<TType> => {
  const form = new FormData()

  const queryString = query.loc?.source.body as string
  const operationName = query.definitions.find((def) => def.kind === 'OperationDefinition')?.name?.value

  form.append('query', queryString)
  form.append('variables', JSON.stringify(variables || {}))
  if (operationName) {
    form.append('operationName', operationName)
  }

  if (files?.length) {
    files.forEach((file) => {
      form.append('files[]', file)
    })
  }

  return fetch('/graphql', {
    body: form,
    credentials: 'include',
    method: 'POST'
  })
    .then((res) => res.json())
    .then(({ data, errors }) => {
      if (errors) throw errors
      return data as TType
    })
}
