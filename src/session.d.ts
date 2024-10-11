import { schema } from '@/models';

declare module 'express-session' {
  interface SessionData {
    user: typeof schema.Users.$inferSelect;
  }
}
