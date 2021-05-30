import express from 'express';
import * as buyController from '../controllers/buy.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all buys
router.get('', buyController.getAllBuys);

//route to create a new buy
router.post('', userAuth, buyController.newBuy);

export default router;
