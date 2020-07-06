import { Context } from 'koa';
import * as Router from '@koa/router';

import { User } from './model/User';
import { Post } from './model/Post';
import { Category } from './model/Category';

const router: Router = new Router({
  prefix: '/api'
});

router
  .get('/user/:id', (context: Context, next: Function) => {
    context.body = User.get(context.params.id);
    next();
  })
  .get('/users', (context: Context, next: Function) => {
    context.body = User.all();
    next();
  })
  .get('/post/:id', (context: Context, next: Function) => {
    context.body = Post.get(context.params.id);
    next();
  })
  .get('/posts', (context: Context, next: Function) => {
    context.body = Post.all();
    next();
  })
  .get('/category/:id', (context: Context, next: Function) => {
    context.body = Category.get(context.params.id);
    next();
  })
  .get('/categories', (context: Context, next: Function) => {
    context.body = Category.all();
    next();
  })

export default router;