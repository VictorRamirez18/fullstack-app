"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fakeAuth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var authConfig = require('../config/auth');

var fakeAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var name;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            name = req.body.name;

            if (name) {
              _context.next = 4;
              break;
            }

            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'FLAG: name is required'
            };

          case 4:
            if (!(name === 'Laptop')) {
              _context.next = 8;
              break;
            }

            res.locals.resultfakeAuth = name;
            _context.next = 9;
            break;

          case 8:
            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Name isn´t equals to Laptop'
            };

          case 9:
            // const { user } = await jwt.verify(name, authConfig.secret);
            // res.locals.user = user;
            // res.locals.token = name;
            next();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function fakeAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.fakeAuth = fakeAuth;