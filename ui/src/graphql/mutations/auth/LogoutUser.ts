import { gql } from 'graphql-tag'

export const LOGOUT_USER_MUTATION = gql`
  mutation LogoutUser {
    logout: logoutUser
  }
`
