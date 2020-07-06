import ApolloClient from 'apollo-boost';

import {
  POST,
  POSTS,
  USER,
  USERS,
  CATEGORY,
  CATEGORIES
} from './query';

const client: ApolloClient<any> = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class GQL {

  static async post(id: number) {
    return new Promise((resolve: Function, reject: Function) => {
      client.query({
        query: POST,
        variables: {
          id
        }
      }).then((response: any) => resolve(response.data.post))
      .catch(error => reject(error));
    })
  }

  static async posts() {
    return new Promise((resolve: Function, reject: Function) => {
      client.query({
        query: POSTS
      }).then((response: any) => resolve(response.data.posts))
      .catch(error => reject(error));
    })
  }

  static async user(id: number) {
    return new Promise((resolve: Function, reject: Function) => {
      client.query({
        query: USER,
        variables: {
          id
        }
      }).then((response: any) => resolve(response.data.user))
      .catch(error => reject(error));
    })
  }

  static async users() {
    return new Promise((resolve: Function, reject: Function) => {
      client.query({
        query: USERS
      }).then((response: any) => resolve(response.data.users))
      .catch(error => reject(error));
    })
  }

  static async category(id: number) {
    return new Promise((resolve: Function, reject: Function) => {
      client.query({
        query: CATEGORY,
        variables: {
          id
        }
      }).then((response: any) => resolve(response.data.category))
      .catch(error => reject(error));
    })
  }

  static async categories() {
    return new Promise((resolve: Function, reject: Function) => {
      client.query({
        query: CATEGORIES
      }).then((response: any) => resolve(response.data.categories))
      .catch(error => reject(error));
    })
  }
}