import { gql } from 'graphql-tag'

export const CREATE_SNACK_MUTATION = gql`
  mutation CreateSnack($attributes: SnackAttributes!) {
    snack: createSnack(attributes: $attributes) {
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
