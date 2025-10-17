import { gql } from 'graphql-tag'

export const UPDATE_SNACK_MUTATION = gql`
  mutation UpdateSnack($id: ID!, $attributes: SnackAttributes!) {
    snack: updateSnack(id: $id, attributes: $attributes) {
      id
      name
      icon
      description
      createdAt
      updatedAt

      snackFlavors {
        id
        flavor {
          id
          name
          icon
        }
      }
    }
  }
`
