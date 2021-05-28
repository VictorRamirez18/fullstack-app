"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newProductValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var newProductValidator = function newProductValidator(req, res, next) {
  var schema = _joi["default"].object({
    id: _joi["default"].number().integer().min(0),
    name: _joi["default"].string().min(3).required(),
    brand: _joi["default"].string().min(2).required(),
    price: _joi["default"].number().min(0).required(),
    stock: _joi["default"].number().integer().min(1).required()
  });

  var _schema$validate = schema.validate(req.body),
      error = _schema$validate.error,
      value = _schema$validate.value;

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

exports.newProductValidator = newProductValidator;