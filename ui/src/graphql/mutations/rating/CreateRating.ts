import { gql } from 'graphql-tag'

export const CREATE_RATING_MUTATION = gql`
  mutation CreateRating($attributes: RatingAttributes!) {
    rating: createRating(attributes: $attributes) {
      id
      rate

      snack {
        id
      }
    }
  }
`
