import * as Koa from 'koa';
import * as cors from '@koa/cors';
import * as helmet from 'koa-helmet';

import { createServer, Server } from 'http';
import { ApolloServer } from 'apollo-server-koa';

import schema from './schema';
import router from './router';

const PORT: number = 4000,
  HOST: string = '0.0.0.0',
  app: Koa = new Koa();

app
  .use(helmet())
  .use(cors({
    exposeHeaders: ['Content-Type', 'Allow']
  }))
  .use(router.routes())
  .use(router.allowedMethods());

const server: ApolloServer = new ApolloServer(schema);

server.applyMiddleware({ app });

const httpServer: Server = createServer(app.callback());

httpServer.on('error', (error: any) => {
  console.error(error);
});

httpServer.on('listening', () => {
  console.log(`Server started at http://${HOST}:${PORT}`);
})

httpServer.listen(PORT, HOST);

