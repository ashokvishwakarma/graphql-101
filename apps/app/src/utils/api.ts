import REST from './rest';

export default class API {
  static async posts(): Promise<any> {
    return REST.posts();
  }

  static async post(id: number): Promise<any> {
    return REST.posts(id);
  }

  static async users(): Promise<any> {
    return REST.users();
  }

  static async user(id: number): Promise<any> {
    return REST.users(id);
  }

  static async categories(): Promise<any> {
    return REST.categories();
  }

  static async category(id: number): Promise<any> {
    return REST.categories(id);
  }
}