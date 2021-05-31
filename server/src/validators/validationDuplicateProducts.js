import sequelize, { DataTypes } from '../config/database';
const Product = require('../models/product')(sequelize, DataTypes);

export const validatorDuplicateProduct = async (req, res, next) => {
  try {
    await Product.findAll({ where: { name: req.body.name } }).then(
      (products) => {
        let arrayProductsSameName = products.filter(
          (product) => product.brand === req.body.brand
        );
        if (!arrayProductsSameName.length) {
          next();
          return false;
        }

        if (arrayProductsSameName[0].dataValues.id === req.body.id) {
          next();
        } else {
          throw { message: 'Cannot Duplicate products' };
        }
      }
    );
  } catch (error) {
    next(error);
  }
};
