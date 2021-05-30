"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _product = _interopRequireDefault(require("./product.route"));

var _buy = _interopRequireDefault(require("./buy.route"));

var router = _express["default"].Router();

var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/products', _product["default"]);
  router.use('/buys', _buy["default"]);
  return router;
};

var _default = routes;
exports["default"] = _default;