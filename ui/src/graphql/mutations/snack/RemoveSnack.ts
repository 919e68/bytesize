import { gql } from 'graphql-tag'

export const REMOVE_SNACK_MUTATION = gql`
  mutation RemoveSnack($id: ID!) {
    snack: removeSnack(id: $id) {
      id
      name
      icon
      description
      createdAt
      updatedAt
    }
  }
`
