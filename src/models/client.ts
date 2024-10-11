import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

const queryClient = postgres(DATABASE_URL);

export const db = drizzle(queryClient, { schema });
