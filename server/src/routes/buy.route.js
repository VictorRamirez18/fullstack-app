import express from 'express';
import * as buyController from '../controllers/buy.controller';
// import { newProductValidator } from '../validators/product.validator';
// import { userAuth } from '../middlewares/auth.middleware';
// import { fakeAuth } from '../middlewares/fake.middleware';

const router = express.Router();

//route to get all buys
// router.get('', buyController.getAllProducts);

//route to create a new buy
router.post('', buyController.newProduct);

export default router;
