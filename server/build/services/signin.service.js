"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = void 0;

var _database = _interopRequireWildcard(require("../config/database"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var User = require('../models/user')(_database["default"], _database.DataTypes); // const bcrypt = require('bcrypt');


var jwt = require('jsonwebtoken');

var authConfig = require('../config/auth');

var signin = function signin(email, password, res) {
  var userEscencials = {
    firstName: null,
    lastName: null,
    email: email,
    image: null
  };
  User.findOne({
    where: {
      email: email
    }
  }).then(function (user) {
    if (!user) {
      res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
        code: 404,
        message: 'User with this email not found'
      });
    } else {
      if (password === user.password) {
        userEscencials.firstName = user.firstName;
        userEscencials.lastName = user.lastName;
        userEscencials.image = user.image;
        var token = jwt.sign({
          user: user
        }, authConfig.secret, {
          expiresIn: authConfig.expires
        });
        res.status(_httpStatusCodes["default"].OK).json({
          code: 200,
          message: 'Authorized',
          token: token,
          data: userEscencials
        });
      } else {
        res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
          code: 404,
          message: 'Incorrect Password'
        });
      }
    }
  })["catch"](function (err) {
    res.status(_httpStatusCodes["default"].INTERNAL_SERVER_ERROR).json(err);
  });
};

exports.signin = signin;