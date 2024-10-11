import { defineConfig } from 'drizzle-kit';

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

export default defineConfig({
  schema: './src/models/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
  verbose: true,
  strict: true,
  out: './drizzle',
});
