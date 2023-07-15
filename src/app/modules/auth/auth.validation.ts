import { z } from 'zod';
import { roleEnum } from './auth.constant';

{
  /* ====================== 
{
 "password":"abrakadabra",
 "role": "buyer",
  "name": {
    "firstName": "Kopa",
     "lastName": "Samsu"
  },
 "phoneNumber":"01711111111",
 "address": "Chattogram",
 "budget":30000  // money to buy the cow
 "income":0 // By Default 0
}

====================== */
}

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string(),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
    role: z.enum([...roleEnum] as [string, ...string[]], {
      required_error: 'Role is required/invalid',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    phoneNumber: z.string({
      required_error: 'Phone number is required',
    }),
    budget: z.number({
      required_error: 'Budget is required',
    }),
    income: z
      .number({
        required_error: 'Income is required/invalid type',
      })
      .optional(),
  }),
});

const userLoginZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string({
      required_error: 'Phone number is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});

export const authValidation = {
  createUserZodSchema,
  userLoginZodSchema,
  refreshTokenZodSchema,
};
