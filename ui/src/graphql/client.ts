import { GraphQLClient } from 'graphql-request'

import { GRAPHQL_URL } from '~/constants'

export const client = new GraphQLClient(GRAPHQL_URL, {
  credentials: 'include'
})
