import { Context } from 'koa';
import * as Router from '@koa/router';

import { User } from './model';

const router: Router = new Router({
  prefix: '/api'
});

router
  .get('/user/:id', (context: Context, next: Function) => {
    console.log(context.params.id);
    context.body = User.get(context.params.id);
    next();
  })
  .get('/users', (context: Context, next: Function) => {
    context.body = User.all();
    next();
  })

export default router;