'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {}
  }
  product.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stock: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'product',
      paranoid: true,
      deletedAt: 'destroyTime'
    }
  );
  return product;
};
