/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** Represents untyped JSON */
  JSON: { input: any; output: any; }
};

export type FeaturedSnack = {
  __typename?: 'FeaturedSnack';
  featureType: Scalars['String']['output'];
  snack?: Maybe<Snack>;
};

export type FilterInput = {
  type: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type Flavor = {
  __typename?: 'Flavor';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type FlavorConnection = {
  __typename?: 'FlavorConnection';
  nodes?: Maybe<Array<Flavor>>;
  pagination?: Maybe<Pagination>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  expiresAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** create a rating */
  createRating: Rating;
  /** create a snack */
  createSnack: Snack;
  /** authorize a user */
  loginUser: LoginResult;
  /** logout a user */
  logoutUser: Scalars['Boolean']['output'];
  /** creates a user */
  registerUser: User;
  /** removes a snack */
  removeSnack: Snack;
  /** update a snack */
  updateSnack: Snack;
};


export type MutationCreateRatingArgs = {
  attributes: RatingAttributes;
};


export type MutationCreateSnackArgs = {
  attributes: SnackAttributes;
};


export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegisterUserArgs = {
  attributes: UserAttributes;
};


export type MutationRemoveSnackArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateSnackArgs = {
  attributes: SnackAttributes;
  id: Scalars['ID']['input'];
};

export type OrderInput = {
  direction: SortDirectionEnum;
  field: Scalars['String']['input'];
};

export type Pagination = {
  __typename?: 'Pagination';
  count?: Maybe<Scalars['Int']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  next?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  prev?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** fetch current user */
  fetchCurrentUser?: Maybe<User>;
  /** fetch a featured snack */
  fetchFeaturedSnack: FeaturedSnack;
  /** fetch all flavors */
  fetchFlavors: FlavorConnection;
  /** fetch a snack */
  fetchSnack: Snack;
  /** fetch all snacks */
  fetchSnacks: SnackConnection;
  /** fetch all suggested snacks */
  fetchSuggestedSnacks: SnackConnection;
};


export type QueryFetchFeaturedSnackArgs = {
  featureType: Scalars['String']['input'];
};


export type QueryFetchFlavorsArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSnackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFetchSnacksArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSuggestedSnacksArgs = {
  filters?: InputMaybe<Array<FilterInput>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<OrderInput>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Rating = {
  __typename?: 'Rating';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  rate: Scalars['Float']['output'];
  snack: Snack;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
};

export type RatingAttributes = {
  comment?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  snackId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type Snack = {
  __typename?: 'Snack';
  averageRating: Scalars['Float']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  currentUserRating?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flavorMatchScore?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ratingCount: Scalars['Int']['output'];
  snackFlavors: Array<SnackFlavor>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
  user: User;
};

export type SnackAttributes = {
  description?: InputMaybe<Scalars['String']['input']>;
  flavorIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['ID']['input']>;
};

export type SnackConnection = {
  __typename?: 'SnackConnection';
  nodes?: Maybe<Array<Snack>>;
  pagination?: Maybe<Pagination>;
};

export type SnackFlavor = {
  __typename?: 'SnackFlavor';
  createdAt: Scalars['ISO8601DateTime']['output'];
  flavor: Flavor;
  id: Scalars['ID']['output'];
  snack: Snack;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
  username: Scalars['String']['output'];
};

export type UserAttributes = {
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['ID']['input']>;
};

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', auth: { __typename?: 'LoginResult', token?: string | null, expiresAt?: any | null, user?: { __typename?: 'User', id: string, username: string, name: string } | null } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterUserMutationVariables = Exact<{
  attributes: UserAttributes;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: string, username: string, name: string, createdAt: any, updatedAt: any } };

export type CreateRatingMutationVariables = Exact<{
  attributes: RatingAttributes;
}>;


export type CreateRatingMutation = { __typename?: 'Mutation', rating: { __typename?: 'Rating', id: string, rate: number, snack: { __typename?: 'Snack', id: string } } };

export type CreateSnackMutationVariables = Exact<{
  attributes: SnackAttributes;
}>;


export type CreateSnackMutation = { __typename?: 'Mutation', snack: { __typename?: 'Snack', id: string, name: string, icon?: string | null, description?: string | null, createdAt: any, updatedAt: any, snackFlavors: Array<{ __typename?: 'SnackFlavor', id: string, flavor: { __typename?: 'Flavor', id: string, name: string, icon?: string | null } }> } };

export type RemoveSnackMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveSnackMutation = { __typename?: 'Mutation', snack: { __typename?: 'Snack', id: string, name: string, icon?: string | null, description?: string | null, createdAt: any, updatedAt: any } };

export type UpdateSnackMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  attributes: SnackAttributes;
}>;


export type UpdateSnackMutation = { __typename?: 'Mutation', snack: { __typename?: 'Snack', id: string, name: string, icon?: string | null, description?: string | null, createdAt: any, updatedAt: any, snackFlavors: Array<{ __typename?: 'SnackFlavor', id: string, flavor: { __typename?: 'Flavor', id: string, name: string, icon?: string | null } }> } };

export type FetchCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCurrentUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, username: string, name: string } | null };

export type FetchFlavorsQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchFlavorsQuery = { __typename?: 'Query', flavors: { __typename?: 'FlavorConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Flavor', id: string, icon?: string | null, name: string, description?: string | null, createdAt: any, updatedAt: any }> | null } };

export type FetchFeaturedSnackQueryVariables = Exact<{
  featureType: Scalars['String']['input'];
}>;


export type FetchFeaturedSnackQuery = { __typename?: 'Query', featuredSnack: { __typename?: 'FeaturedSnack', featureType: string, snack?: { __typename?: 'Snack', id: string, icon?: string | null, name: string, description?: string | null, flavorMatchScore?: number | null, averageRating: number, ratingCount: number, currentUserRating?: number | null, createdAt: any, updatedAt: any, snackFlavors: Array<{ __typename?: 'SnackFlavor', id: string, flavor: { __typename?: 'Flavor', id: string, name: string, icon?: string | null } }> } | null } };

export type FetchSnackQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FetchSnackQuery = { __typename?: 'Query', snack: { __typename?: 'Snack', id: string, icon?: string | null, name: string, description?: string | null, flavorMatchScore?: number | null, averageRating: number, ratingCount: number, currentUserRating?: number | null, createdAt: any, updatedAt: any, snackFlavors: Array<{ __typename?: 'SnackFlavor', id: string, flavor: { __typename?: 'Flavor', id: string, name: string, icon?: string | null } }> } };

export type FetchSnacksQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchSnacksQuery = { __typename?: 'Query', snacks: { __typename?: 'SnackConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Snack', id: string, icon?: string | null, name: string, description?: string | null, createdAt: any, updatedAt: any, snackFlavors: Array<{ __typename?: 'SnackFlavor', id: string, flavor: { __typename?: 'Flavor', id: string, name: string, icon?: string | null } }> }> | null } };

export type FetchSuggestedSnacksQueryVariables = Exact<{
  filters?: InputMaybe<Array<FilterInput> | FilterInput>;
  order?: InputMaybe<Array<OrderInput> | OrderInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FetchSuggestedSnacksQuery = { __typename?: 'Query', snacks: { __typename?: 'SnackConnection', pagination?: { __typename?: 'Pagination', page?: number | null, pages?: number | null, limit?: number | null, count?: number | null, prev?: boolean | null, next?: boolean | null } | null, nodes?: Array<{ __typename?: 'Snack', id: string, icon?: string | null, name: string, description?: string | null, flavorMatchScore?: number | null, averageRating: number, ratingCount: number, currentUserRating?: number | null, createdAt: any, updatedAt: any, snackFlavors: Array<{ __typename?: 'SnackFlavor', id: string, flavor: { __typename?: 'Flavor', id: string, name: string, icon?: string | null } }> }> | null } };


export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"auth"},"name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogoutUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"logout"},"name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const CreateRatingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRating"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RatingAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"rating"},"name":{"kind":"Name","value":"createRating"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"snack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRatingMutation, CreateRatingMutationVariables>;
export const CreateSnackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSnack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnackAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"snack"},"name":{"kind":"Name","value":"createSnack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"snackFlavors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flavor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateSnackMutation, CreateSnackMutationVariables>;
export const RemoveSnackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveSnack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"snack"},"name":{"kind":"Name","value":"removeSnack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveSnackMutation, RemoveSnackMutationVariables>;
export const UpdateSnackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSnack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnackAttributes"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"snack"},"name":{"kind":"Name","value":"updateSnack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"attributes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attributes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"snackFlavors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flavor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSnackMutation, UpdateSnackMutationVariables>;
export const FetchCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"fetchCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchCurrentUserQuery, FetchCurrentUserQueryVariables>;
export const FetchFlavorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchFlavors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"flavors"},"name":{"kind":"Name","value":"fetchFlavors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchFlavorsQuery, FetchFlavorsQueryVariables>;
export const FetchFeaturedSnackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchFeaturedSnack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"featureType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"featuredSnack"},"name":{"kind":"Name","value":"fetchFeaturedSnack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"featureType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"featureType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"featureType"}},{"kind":"Field","name":{"kind":"Name","value":"snack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"snackFlavors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flavor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"flavorMatchScore"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"ratingCount"}},{"kind":"Field","name":{"kind":"Name","value":"currentUserRating"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchFeaturedSnackQuery, FetchFeaturedSnackQueryVariables>;
export const FetchSnackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSnack"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"snack"},"name":{"kind":"Name","value":"fetchSnack"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"snackFlavors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flavor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"flavorMatchScore"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"ratingCount"}},{"kind":"Field","name":{"kind":"Name","value":"currentUserRating"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FetchSnackQuery, FetchSnackQueryVariables>;
export const FetchSnacksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSnacks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"snacks"},"name":{"kind":"Name","value":"fetchSnacks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"snackFlavors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flavor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchSnacksQuery, FetchSnacksQueryVariables>;
export const FetchSuggestedSnacksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchSuggestedSnacks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"snacks"},"name":{"kind":"Name","value":"fetchSuggestedSnacks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"snackFlavors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"flavor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"flavorMatchScore"}},{"kind":"Field","name":{"kind":"Name","value":"averageRating"}},{"kind":"Field","name":{"kind":"Name","value":"ratingCount"}},{"kind":"Field","name":{"kind":"Name","value":"currentUserRating"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FetchSuggestedSnacksQuery, FetchSuggestedSnacksQueryVariables>;