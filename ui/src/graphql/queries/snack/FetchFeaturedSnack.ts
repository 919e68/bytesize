import { gql } from 'graphql-tag'

export const FETCH_FEATURED_SNACK_QUERY = gql`
  query FetchFeaturedSnack($featureType: String!) {
    featuredSnack: fetchFeaturedSnack(featureType: $featureType) {
      featureType
      snack {
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
  }
`
