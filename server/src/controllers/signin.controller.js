import HttpStatus from 'http-status-codes';
import * as SignIn from '../services/signin.service';

export const signIn = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    await SignIn.signin(email, password, res);
  } catch (error) {
    next(error);
  }
};
