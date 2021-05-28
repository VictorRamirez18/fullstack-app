import sequelize, { DataTypes } from '../config/database';
const Buy = require('../models/buy')(sequelize, DataTypes);

//get all Buys
export const getAllBuys = async () => {
  const data = await Buy.findAll();
  return data;
};

//create new Buy
export const newBuy = async (body) => {
  const data = await Buy.create(body);
  return data;
};
