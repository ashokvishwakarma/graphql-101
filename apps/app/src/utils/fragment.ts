import { gql, DocumentNode } from 'apollo-boost';

export const userFields: DocumentNode = gql`
  fragment userFields on User {
    id
    name
    email
    age
  }
`;

export const categoryFields: DocumentNode = gql`
  fragment categoryFields on Category {
    id
    name
    description
  }
`

export const postFields: DocumentNode = gql`
  fragment postFields on Post {
    id
    title
    description
  }
`