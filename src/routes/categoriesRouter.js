const express = require('express');

const router = express.Router();

const categoriesController = require('../controllers/categoriesController');
const { validateToken } = require('../middlewares/validateToken');

router.use(validateToken);

router.post('/', categoriesController.postCategories);

module.exports = router;
