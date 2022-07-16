const express = require('express');

const router = express.Router();
const userControlller = require('../controllers/userController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', userControlller.userFunction);
router.use(validateToken);
router.get('/', userControlller.getUsers);
// router.get('/id', userControlller.getUserById);

module.exports = router;
