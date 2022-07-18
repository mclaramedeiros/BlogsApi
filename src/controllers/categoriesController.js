const categoriesService = require('../services/categoriesService');

const postCategories = async (req, res) => {
  const { name } = req.body;
  const data = await categoriesService.postCategories(name);
  if (data.message) {
    res.status(400).json({ message: data.message });
  }
  res.status(201).json(data);
};

const getCategories = async (req, res) => {
  const data = await categoriesService.getCategories();
  return res.status(200).json(data);
};

module.exports = { postCategories, getCategories };
