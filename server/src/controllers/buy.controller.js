import HttpStatus from 'http-status-codes';
import * as BuyService from '../services/product.service';

export const getAllBuys = async (req, res, next) => {
  try {
    const data = await BuyService.getAllProducts();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All products fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const newBuy = async (req, res, next) => {
  try {
    const data = await BuyService.newBuy(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Buy created successfully'
    });
  } catch (error) {
    next(error);
  }
};
