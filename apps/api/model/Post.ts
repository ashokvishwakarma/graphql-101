import * as posts from '../data/posts.json';

export class Post {
  static get(id: number) {
    const _index: number = posts.findIndex((p: any) => p.id == id);

    if(_index !== -1) {
      return posts[_index];
    }

    return null;
  }

  static all() {
    return posts;
  }
}