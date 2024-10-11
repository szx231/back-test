import RedisStore from 'connect-redis';
import session from 'express-session';
import { createClient } from 'redis';

const redisClient = createClient();
redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
  prefix: 'myapp:',
});

export const sessionMiddlware = session({
  store: redisStore,
  resave: false,
  saveUninitialized: false,
  secret: '3b8b86e56136ee0eac2062b5c7828702b6d880f1',
  rolling: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    secure: false,
    httpOnly: true,
  },
});
