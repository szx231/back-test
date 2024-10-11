import { db, schema } from '@/models';
import { genPasswordHash } from '@/utils/password';
import { eq } from 'drizzle-orm';

type CreateUserArgs = {
  name: string;
  email: string;
  password: string;
};

const createUser = async (data: CreateUserArgs) => {
  const { email, name, password } = data;

  const hash = genPasswordHash(password);
  const result = await db.insert(schema.Users).values({ email, hash, name }).returning();
  return result.at(0)!;
};

const getUserById = async (id: string) => {
  const result = await db.select().from(schema.Users).where(eq(schema.Users.id, id));
  return result.at(0);
};

const getUserByEmail = async (email: string) => {
  const result = await db.select().from(schema.Users).where(eq(schema.Users.email, email));
  return result.at(0);
};

export const usersService = {
  createUser,
  getUserById,
  getUserByEmail,
};
