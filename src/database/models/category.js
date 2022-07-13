'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    categoryId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    tableName: 'Category'
  });
  return Categories;
};