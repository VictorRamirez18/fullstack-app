import HttpStatus from 'http-status-codes';
import sequelize, { DataTypes } from '../config/database';
const Product = require('../models/product')(sequelize, DataTypes);

//get all products
export const getAllProducts = async () => {
  const data = await Product.findAll();
  return data;
};

//create new product
export const newProduct = async (body, res) => {
  let data;
  await Product.findAll({ where: { name: body.name } }).then((products) => {
    let arrayProductsSameName = products.filter(
      (product) => product.brand === body.brand
    );
    if (!arrayProductsSameName.length) {
      const dataFunction = async () => {
        let productCreated = await Product.create(body);
        data = productCreated.dataValues;
        return false;
      };
      return dataFunction();
    }
    res.status(HttpStatus.BAD_REQUEST).json({
      code: 404,
      message: 'Cannot Duplicate products'
    });
  });
  console.log(data);
  return data;
};

//update single Product
export const updateProduct = async (id, body) => {
  await Product.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single Product
export const deleteProduct = async (id) => {
  await Product.destroy({ where: { id: id } });
  return '';
};

//get single Product
export const getProduct = async (id) => {
  const data = await Product.findByPk(id);
  return data;
};

//update amount Product
export const updateAmountProduct = async (body) => {
  await Product.update(
    { stock: body.stock - body.amount },
    {
      where: { id: body.idProduct }
    }
  );
  body.stock -= body.amount;
  return body;
};
