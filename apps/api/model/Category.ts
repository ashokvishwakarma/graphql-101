import * as categories from '../data/categories.json';

export class Category {
  static get(id: number) {
    const _index: number = categories.findIndex((c: any) => c.id == id);

    if(_index !== -1) {
      return categories[_index];
    }

    return null;
  }

  static all() {
    return categories;
  }
}