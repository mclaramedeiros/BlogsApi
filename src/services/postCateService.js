const models = require('../database/models');

const createPostCate = async (categoryIds, postId) => {
  await models.PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  })));
};

module.exports = { createPostCate };
