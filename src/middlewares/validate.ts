import { z } from 'zod';
import { type RequestHandler, type Response } from 'express';

type ValidatorType =
  | z.ZodObject<z.ZodRawShape>
  | z.ZodUnion<[z.ZodObject<z.ZodRawShape>, ...z.ZodObject<z.ZodRawShape>[]]>;

type Validators = {
  body?: ValidatorType;
  query?: ValidatorType;
  params?: ValidatorType;
};

type ValidatorsKeys = keyof Validators;

const validationError = (response: Response, error: z.ZodError) => {
  return response.status(403).json({
    status: 'error',
    reason: 'validation error',
    errors: error,
  });
};

export const validate =
  (validators: Validators): RequestHandler =>
  (req, res, next) => {
    const keys = Object.keys(validators) as ValidatorsKeys[];

    for (const key of keys) {
      const validator = validators[key];
      if (!validator) continue;
      const result = validator.safeParse(req[key]);
      if (result.success) {
        req[key] = result.data;
      } else {
        return validationError(res, result.error);
      }
    }

    next();
  };
