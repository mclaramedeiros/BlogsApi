// const { Category } = require('../database/models');
const models = require('../database/models');
const { throwBadRequestError } = require('../middlewares/throwError');

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

const getCateById = async (id) => {
  const categoryPk = await models.Category.findByPk(id);
  if (!categoryPk) {
    throwBadRequestError('"categoryIds" not found');
  }
  return categoryPk;
};

module.exports = { postCategories, getCategories, getCateById };
