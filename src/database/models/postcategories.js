'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "BlogPosts",
        key: "id"
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Categories",
        key: "id"
      },
    },  
  }, 
  {
    tableName: 'PostCategories'
  });
  return PostCategories;
};