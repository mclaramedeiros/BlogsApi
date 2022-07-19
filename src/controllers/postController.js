const postService = require('../services/postService');
const schemas = require('../valitations/postSchema');
const { readToken } = require('../helpers/jwt');
const categoriesService = require('../services/categoriesService');
const { createPostCate } = require('../services/postCateService');

const postFunction = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const user = await readToken(token);

  const { error } = schemas.postSchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });

  await Promise.all(categoryIds.map((id) => categoriesService.getCateById(id)));

  const result = await postService.postFunction(title, content, user.id);

  await createPostCate(categoryIds, result.id);

  return res.status(201).json(result);
};

module.exports = { postFunction };
