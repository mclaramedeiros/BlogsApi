// const { Category } = require('../database/models');
const models = require('../database/models');

const postCategories = async (name) => {
  if (!name) {
    return { message: '"name" is required' };
  }
  const data = await models.Category.create({ name }, { raw: true });
  return data;
};

const getCategories = async () => {
  const result = await models.Category.findAll();
  return result;
};

module.exports = { postCategories, getCategories };
