import { gql } from 'graphql-tag'

export const REGISTER_USER_MUTATION = gql`
  mutation RegisterUser($attributes: UserAttributes!) {
    user: registerUser(attributes: $attributes) {
      id
      username
      name
      createdAt
      updatedAt
    }
  }
`
