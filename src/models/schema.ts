import { date, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const Users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 64 }).notNull(),
  email: varchar('email', { length: 128 }).unique().notNull(),
  hash: text('hash').notNull(),
  createdAt: date('created_at').defaultNow(),
});

export const Profiles = pgTable('profiles', {
  userId: uuid('user_id')
    .references(() => Users.id)
    .primaryKey(),
  photo: text('photo'),
  linkedIdUrl: text('linkedin_url'),
});
