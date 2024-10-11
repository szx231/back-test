import { usersService } from '@/services';
import { checkPassword } from '@/utils/password';
import { LoginSchema, UserSchema } from '@/zodSchemas/users';
import { RequestHandler } from 'express';

export const registerUser: RequestHandler = async (req, res) => {
  const userData = req.body as UserSchema;

  try {
    const user = await usersService.createUser(userData);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ status: 'error', message: 'already exist' });
  }
};

export const login: RequestHandler = async (req, res) => {
  const userData = req.body as LoginSchema;
  const user = await usersService.getUserByEmail(userData.email);

  if (!user || !checkPassword(userData.password, user.hash)) {
    return res.status(400).json({ status: 'error', message: 'incorrect email or password' });
  }

  req.session.user = user;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hash, ...payload } = user;

  res.json({ status: 'done', payload });
};

export const logout: RequestHandler = (req, res) => {
  req.session.destroy(() => {
    res.json({ status: 'done' });
  });
};
