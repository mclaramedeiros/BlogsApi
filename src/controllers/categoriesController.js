const categoriesService = require('../services/categoriesService');

const postCategories = async (req, res) => {
  const { name } = req.body;
  const data = await categoriesService.postCategories(name);
  console.log(data);
  if (data.message) {
    res.status(400).json({ message: data.message });
  }
  res.status(201).json(data);
};

module.exports = { postCategories };
