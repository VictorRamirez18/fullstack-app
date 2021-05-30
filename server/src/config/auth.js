module.exports = {
  secret: process.env.AUTH_SECRET || 'ckz',
  expires: process.env.AUTH_EXPIRES || '1day'
};
