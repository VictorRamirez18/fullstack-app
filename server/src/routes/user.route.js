import express from 'express';
import * as signInController from '../controllers/signin.controller';
// import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to singin
router.post('/signin', signInController.signIn);

export default router;
