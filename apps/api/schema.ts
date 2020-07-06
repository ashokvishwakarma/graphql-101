import { gql } from 'apollo-server-koa';

export default {
  typeDefs: gql`
    scalar Date

    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: (root: any, args: any, context: any) => 'World'
    }
  }
}