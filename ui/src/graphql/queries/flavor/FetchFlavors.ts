import { gql } from 'graphql-tag'

export const FETCH_FLAVORS_QUERY = gql`
  query FetchFlavors($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {
    flavors: fetchFlavors(filters: $filters, order: $order, page: $page, limit: $limit) {
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
        createdAt
        updatedAt
      }
    }
  }
`
