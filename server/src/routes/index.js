import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import productRoute from './product.route';
import buyRoute from './buy.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/products', productRoute);
  router.use('/buys', buyRoute);

  return router;
};

export default routes;
