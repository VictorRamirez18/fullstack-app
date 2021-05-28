import express from 'express';
import * as productController from '../controllers/product.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('', productController.getAllProducts);

// //route to create a new user
// router.post('', newUserValidator, productController.newUser);

// //route to get a single user by their user id
// router.get('/:id', userAuth, productController.getUser);

// //route to update a single user by their user id
// router.put('/:id', productController.updateUser);

// //route to delete a single user by their user id
// router.delete('/:id', productController.deleteUser);

export default router;
