import { gql } from 'apollo-server-koa';

import { User } from './model/User';

export default {
  typeDefs: gql`
    scalar Date

    type User {
      id: Int
      name: String
      age: Int
      email: String
    }

    type Query {
      hello: String
      users: [User]
    }
  `,
  resolvers: {
    Query: {
      hello: (root: any, args: any, context: any) => 'World',
      users: (root: any, args: any, context: any) => User.all()
    }
  }
}