import { gql } from 'graphql-tag'

export const FETCH_SNACK_QUERY = gql`
  query FetchSnack($id: ID!) {
    snack: fetchSnack(id: $id) {
      id
      icon
      name
      description
      snackFlavors {
        id
        flavor {
          id
          name
          icon
        }
      }

      flavorMatchScore
      averageRating
      ratingCount
      currentUserRating

      createdAt
      updatedAt
    }
  }
`
