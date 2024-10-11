import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from './schema';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

const queryClient = postgres(DATABASE_URL, { max: 1 });

const db = drizzle(queryClient, { schema });

migrate(db, { migrationsFolder: './drizzle', migrationsSchema: './src/models/schema.ts' });
