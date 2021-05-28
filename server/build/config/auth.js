"use strict";

module.exports = {
  secret: process.env.AUTH_SECRET || 'CKZ' // expires: process.env.AUTH_EXPIRES || 600,
  // rounds: process.env.AUTH_ROUNDS || 10

};