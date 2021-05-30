import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
const User = require('../models/user')(sequelize, DataTypes);
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

export const signin = (email, password, res) => {
  const userEscencials = {
    firstName: null,
    lastName: null,
    email: email,
    image: null
  };

  User.findOne({
    where: {
      email: email
    }
  })
    .then((user) => {
      if (!user) {
        res.status(HttpStatus.BAD_REQUEST).json({
          code: 404,
          message: 'User with this email not found'
        });
      } else {
        if (password === user.password) {
          userEscencials.firstName = user.firstName;
          userEscencials.lastName = user.lastName;
          userEscencials.image = user.image;
          // let token = jwt.sign({ user: user }, authConfig.secret, {
          //   expiresIn: authConfig.expires
          // });
          res.status(HttpStatus.OK).json({
            code: 200,
            message: 'Authorized',
            // token: token,
            data: userEscencials
          });
        } else {
          res
            .status(HttpStatus.BAD_REQUEST)
            .json({ code: 404, message: 'Incorrect Password' });
        }
      }
    })
    .catch((err) => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
};
