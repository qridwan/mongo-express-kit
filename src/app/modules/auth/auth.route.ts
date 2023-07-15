import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { authValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(authValidation.createUserZodSchema),
  AuthController.signUpUser
);

router.post(
  '/login',
  validateRequest(authValidation.userLoginZodSchema),
  AuthController.userLogin
);

router.post(
  '/refresh-token',
  validateRequest(authValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);
export const SignupRoutes = router;
