import { gql } from 'graphql-tag'

export const FETCH_SUGGESTED_SNACKS_QUERY = gql`
  query FetchSuggestedSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {
    snacks: fetchSuggestedSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {
      pagination {
        page
        pages
        limit
        count
        prev
        next
      }

      nodes {
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
        createdAt
        updatedAt
        flavorMatchScore
      }
    }
  }
`
