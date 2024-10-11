import bcrypt from 'bcrypt';

export const genPasswordHash = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const checkPassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};
