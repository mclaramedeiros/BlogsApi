const express = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.use(validateToken);

router.post('/', postController.postFunction);

module.exports = router;
