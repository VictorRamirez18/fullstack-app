import express from 'express';
import * as productController from '../controllers/product.controller';
import { newProductValidator } from '../validators/product.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all products
router.get('', productController.getAllProducts);

//route to create a new product
router.post('', newProductValidator, userAuth, productController.newProduct);

//route to get a single product by their product id
router.get('/:id', productController.getProduct);

//route to update a single product by their product id
router.put(
  '/:id',
  newProductValidator,
  userAuth,
  productController.updateProduct
);

//route to delete a single product by their product id
router.put('/delete/:id', userAuth, productController.deleteProduct);

export default router;
