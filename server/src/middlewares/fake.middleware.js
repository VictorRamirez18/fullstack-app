import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

const authConfig = require('../config/auth');

export const fakeAuth = async (req, res, next) => {
  try {
    let name = req.body.name;
    if (!name)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'FLAG: name is required'
      };
    // name = name.split(' ')[1];
    if (name === 'Laptop') {
      res.locals.resultfakeAuth = name;
    } else {
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Name isn´t equals to Laptop'
      };
    }
    // const { user } = await jwt.verify(name, authConfig.secret);
    // res.locals.user = user;
    // res.locals.token = name;
    next();
  } catch (error) {
    next(error);
  }
};
