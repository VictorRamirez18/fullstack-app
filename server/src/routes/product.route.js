import express from 'express';
import * as productController from '../controllers/product.controller';
import { newProductValidator } from '../validators/product.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { fakeAuth } from '../middlewares/fake.middleware';

const router = express.Router();

//route to get all products
router.get('', productController.getAllProducts);

//route to create a new product
router.post('', newProductValidator, fakeAuth, productController.newProduct);

//route to get a single product by their product id
router.get('/:id', productController.getProduct);

//route to update a single product by their product id
router.put('/:id', newProductValidator, productController.updateProduct);

//route to delete a single product by their product id
router.put('/delete/:id', productController.deleteProduct);

export default router;
