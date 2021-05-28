import sequelize, { DataTypes } from '../config/database';
const Product = require('../models/product')(sequelize, DataTypes);

//get all products
export const getAllProducts = async () => {
  const data = await Product.findAll();
  return data;
};

//create new product
export const newProduct = async (body) => {
  const data = await Product.create(body);
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
