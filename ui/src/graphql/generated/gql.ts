/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation LoginUser($username: String!, $password: String!) {\n    auth: loginUser(username: $username, password: $password) {\n      token\n      expiresAt\n      user {\n        id\n        username\n        name\n      }\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  mutation LogoutUser {\n    logout: logoutUser\n  }\n": typeof types.LogoutUserDocument,
    "\n  mutation RegisterUser($attributes: UserAttributes!) {\n    user: registerUser(attributes: $attributes) {\n      id\n      username\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.RegisterUserDocument,
    "\n  query FetchCurrentUser {\n    user: fetchCurrentUser {\n      id\n      username\n      name\n    }\n  }\n": typeof types.FetchCurrentUserDocument,
    "\n  query FetchFlavors($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    flavors: fetchFlavors(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": typeof types.FetchFlavorsDocument,
    "\n  query FetchSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": typeof types.FetchSnacksDocument,
    "\n  query FetchSuggestedSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSuggestedSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n        flavorMatchScore\n      }\n    }\n  }\n": typeof types.FetchSuggestedSnacksDocument,
};
const documents: Documents = {
    "\n  mutation LoginUser($username: String!, $password: String!) {\n    auth: loginUser(username: $username, password: $password) {\n      token\n      expiresAt\n      user {\n        id\n        username\n        name\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation LogoutUser {\n    logout: logoutUser\n  }\n": types.LogoutUserDocument,
    "\n  mutation RegisterUser($attributes: UserAttributes!) {\n    user: registerUser(attributes: $attributes) {\n      id\n      username\n      name\n      createdAt\n      updatedAt\n    }\n  }\n": types.RegisterUserDocument,
    "\n  query FetchCurrentUser {\n    user: fetchCurrentUser {\n      id\n      username\n      name\n    }\n  }\n": types.FetchCurrentUserDocument,
    "\n  query FetchFlavors($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    flavors: fetchFlavors(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.FetchFlavorsDocument,
    "\n  query FetchSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.FetchSnacksDocument,
    "\n  query FetchSuggestedSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSuggestedSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n        flavorMatchScore\n      }\n    }\n  }\n": types.FetchSuggestedSnacksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($username: String!, $password: String!) {\n    auth: loginUser(username: $username, password: $password) {\n      token\n      expiresAt\n      user {\n        id\n        username\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($username: String!, $password: String!) {\n    auth: loginUser(username: $username, password: $password) {\n      token\n      expiresAt\n      user {\n        id\n        username\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LogoutUser {\n    logout: logoutUser\n  }\n"): (typeof documents)["\n  mutation LogoutUser {\n    logout: logoutUser\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser($attributes: UserAttributes!) {\n    user: registerUser(attributes: $attributes) {\n      id\n      username\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($attributes: UserAttributes!) {\n    user: registerUser(attributes: $attributes) {\n      id\n      username\n      name\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchCurrentUser {\n    user: fetchCurrentUser {\n      id\n      username\n      name\n    }\n  }\n"): (typeof documents)["\n  query FetchCurrentUser {\n    user: fetchCurrentUser {\n      id\n      username\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchFlavors($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    flavors: fetchFlavors(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchFlavors($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    flavors: fetchFlavors(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchSuggestedSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSuggestedSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n        flavorMatchScore\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchSuggestedSnacks($filters: [FilterInput!], $order: [OrderInput!], $page: Int, $limit: Int) {\n    snacks: fetchSuggestedSnacks(filters: $filters, order: $order, page: $page, limit: $limit) {\n      pagination {\n        page\n        pages\n        limit\n        count\n        prev\n        next\n      }\n\n      nodes {\n        id\n        icon\n        name\n        description\n        snackFlavors {\n          id\n          flavor {\n            id\n            name\n            icon\n          }\n        }\n        createdAt\n        updatedAt\n        flavorMatchScore\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;