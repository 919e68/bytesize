import { gql } from 'graphql-tag'

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($username: String!, $password: String!) {
    auth: loginUser(username: $username, password: $password) {
      token
      expiresAt
      user {
        id
        username
        name
      }
    }
  }
`
