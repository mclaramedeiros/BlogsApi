require('dotenv').config();
const jwt = require('jsonwebtoken');
const { throwUnauthorizedError } = require('../middlewares/throwError');

const createToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token;
};

const readToken = (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data;
};

const verifyToken = (token) => {
  if (!token) {
    throwUnauthorizedError('Token not found');
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    throwUnauthorizedError('Expired or invalid token');
  }
};

module.exports = { createToken, verifyToken, readToken };
