const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.use(validateToken);

router.post('/', categoriesController.postCategories);
router.get('/', categoriesController.getCategories);

module.exports = router;
