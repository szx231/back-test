import { authController } from '@/controllers';
import { isAuthenticated } from '@/middlewares/isAuthenticated';
import { validate } from '@/middlewares/validate';
import { loginSchema, userSchema } from '@/zodSchemas/users';
import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/register', validate({ body: userSchema }), authController.registerUser);
authRouter.post('/login', validate({ body: loginSchema }), authController.login);
authRouter.all('/logout', isAuthenticated, authController.logout);
