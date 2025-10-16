import { GraphQLClient } from 'graphql-request'

interface GraphQLClientArgs {
  headers?: Record<string, string>
  url?: string
}

export const createGraphQLClient = ({ headers = {}, url }: GraphQLClientArgs) => {
  const graphqlUrl = url || process.env.GRAPHQL_URL!
  return new GraphQLClient(graphqlUrl, { headers })
}
