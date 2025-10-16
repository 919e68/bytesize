import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { createConsumer } from '@rails/actioncable'
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink'

export { useSubscription } from '@apollo/client'
export { useMutation, useQuery } from '@tanstack/react-query'

import { CABLE_URL } from '~/constants'

const GraphQLCache = new InMemoryCache()

const createApolloClient = () => {
  const httpLink = createHttpLink({ uri: '/graphql' })

  if (typeof window !== 'undefined') {
    const authToken = localStorage.getItem('authToken')
    const cable = createConsumer(CABLE_URL + `?auth_token=${authToken}`)
    const actionCableLink = new ActionCableLink({
      cable
    })

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query)

        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
      },
      actionCableLink,
      httpLink
    )

    return new ApolloClient({
      cache: GraphQLCache,
      defaultOptions: {
        query: {
          errorPolicy: 'all',
          fetchPolicy: 'no-cache'
        },
        watchQuery: {
          errorPolicy: 'ignore',
          fetchPolicy: 'no-cache'
        }
      },
      link: splitLink
    })
  }

  return new ApolloClient({
    cache: GraphQLCache,
    defaultOptions: {
      query: {
        errorPolicy: 'all',
        fetchPolicy: 'no-cache'
      },
      watchQuery: {
        errorPolicy: 'ignore',
        fetchPolicy: 'no-cache'
      }
    },
    link: httpLink
  })
}

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

export const initializeApolloClient = () => {
  apolloClient = createApolloClient()
  return apolloClient
}

export const getApolloClient = () => {
  return apolloClient ?? initializeApolloClient()
}
