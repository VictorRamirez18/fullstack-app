import sequelize, { DataTypes } from '../config/database';
const Product = require('../models/product')(sequelize, DataTypes);

//get all products
export const getAllProducts = async () => {
  const data = await Product.findAll();
  return data;
};

// //create new user
// export const newUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };

// //update single user
// export const updateUser = async (id, body) => {
//   await User.update(body, {
//     where: { id: id }
//   });
//   return body;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.destroy({ where: { id: id } });
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findByPk(id);
//   return data;
// };
