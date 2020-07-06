import * as users from '../data/users.json';

export class User {
  static get(id: any) {
    const _index: number = users.findIndex((u: any) => u.id == id);

    if(_index !== -1) {
      return users[_index];
    }

    return null;
  }

  static all() {
    return users;
  }
}