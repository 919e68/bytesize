import { gql } from 'graphql-tag'

export const FETCH_CURRENT_USER_QUERY = gql`
  query FetchCurrentUser {
    user: fetchCurrentUser {
      id
      username
      name
    }
  }
`
