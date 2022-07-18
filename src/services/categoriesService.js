// const { Category } = require('../database/models');
const models = require('../database/models');

const postCategories = async (name) => {
  if (!name) {
    return { message: '"name" is required' };
  }
  const data = await models.Category.create({ name }, { raw: true });
  console.log(data);
  return data;
};

module.exports = { postCategories };
