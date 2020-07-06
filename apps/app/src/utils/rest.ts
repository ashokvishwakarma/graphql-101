const base: string = 'http://localhost:4000/api';

const url: any = {
  post: `${base}/post/`,
  posts: `${base}/posts`,
  user: `${base}/user/`,
  users: `${base}/users`,
  category: `${base}/category/`,
  categories: `${base}/categories`
}

export default class REST {
  private static async _xhr(url: string): Promise<any> {
    return fetch(url);
  }

  static async posts(id: number = 0): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
      const promise: Promise<any> = id ? REST._xhr(`${url.post}${id}`) : REST._xhr(url.posts);

      promise.then((res: any) => res.json()).then((result: any) => {
        resolve(result);
      }).catch(error => reject(error));
    });
  }

  static async users(id: number = 0): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
      const promise: Promise<any> = id ? REST._xhr(`${url.user}${id}`) : REST._xhr(url.users);

      promise.then((res: any) => res.json()).then((result: any) => {
        resolve(result);
      }).catch(error => reject(error));
    });
  }

  static async categories(id: number = 0): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
      const promise: Promise<any> = id ? REST._xhr(`${url.category}${id}`) : REST._xhr(url.categories);

      promise.then((res: any) => res.json()).then((result: any) => {
        resolve(result);
      }).catch(error => reject(error));
    });
  }
}