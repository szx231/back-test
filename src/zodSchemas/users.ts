import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
