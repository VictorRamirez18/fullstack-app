import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
const User = require('../models/user')(sequelize, DataTypes);
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const authConfig = require('../config/auth');

export const signin = (email, password, res) => {
  User.findOne({
    where: {
      email: email
    }
  })
    .then((user) => {
      if (!user) {
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'Usuario con este correo no encontrado' });
      } else {
        if (password === user.password) {
          //   let token = jwt.sign({ user: user }, authConfig.secret, {
          //     expiresIn: authConfig.expires
          //   });
          res.status(HttpStatus.OK).json({ message: 'Autorizado' });
        } else {
          res
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: 'Contraseña incorrecta' });
        }
      }
    })
    .catch((err) => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
};
