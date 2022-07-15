const express = require('express');

const router = express.Router();
const userControlller = require('../controllers/userController');

router.post('/', userControlller.userFunction);

module.exports = router;