'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buy extends Model {
    static associate(models) {}
  }
  buy.init(
    {
      idProduct: DataTypes.INTEGER,
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      total: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: 'buy'
    }
  );
  return buy;
};
