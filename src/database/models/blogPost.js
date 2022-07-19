'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: "Users",
        key: "id"
      }
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, 
  {
    tableName: 'BlogPosts',
    timestamps: false
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    })
  }
  return BlogPost;
};