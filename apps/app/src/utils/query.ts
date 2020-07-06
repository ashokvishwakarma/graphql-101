import { gql, DocumentNode } from 'apollo-boost';

import {
  userFields,
  postFields,
  categoryFields
} from './fragment';

export const USERS: DocumentNode = gql`
  query users {
    users {
      ...userFields
    }
  }
  ${userFields}
`

export const USER: DocumentNode = gql`
  query user($id: Int!) {
    users(id: $id) {
      ...userFields
    }
  }
  ${userFields}
`

export const POSTS: DocumentNode = gql`
  query posts {
    posts {
      ...postFields
    }
  }
  ${postFields}
`

export const POST: DocumentNode = gql`
  query post($id: Int!) {
    post(id: $id) {
      ...postFields
    }
  }
  ${postFields}
`

export const CATEGORIES: DocumentNode = gql`
  query categories {
    categories {
      ...categoryFields
    }
  }
  ${categoryFields}
`

export const CATEGORY: DocumentNode = gql`
  query category($id: Int!) {
    category(id: $id) {
      ...categoryFields
    }
  }
  ${categoryFields}
`