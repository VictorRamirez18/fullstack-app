import HttpStatus from 'http-status-codes';
import * as ProductService from '../services/product.service';

export const getAllProducts = async (req, res, next) => {
  try {
    const data = await ProductService.getAllProducts();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All products fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const data = await ProductService.getProduct(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Product fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const newProduct = async (req, res, next) => {
  try {
    const data = await ProductService.newProduct(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Product created successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const data = await ProductService.updateProduct(req.params.id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Product updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Product deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
