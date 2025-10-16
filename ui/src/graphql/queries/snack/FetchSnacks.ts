import { gql } from 'graphql-tag'

export const FETCH_SNACKS_QUERY = gql`
  query FetchSnacks(
    $filters: [FilterInput!]
    $order: [OrderInput!]
    $page: Int
    $limit: Int
  ) {
    snacks: fetchSnacks(
      filters: $filters
      order: $order
      page: $page,
      limit: $limit
    ) {
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
      }
    }
  }
`
