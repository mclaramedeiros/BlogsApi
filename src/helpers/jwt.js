const jwt = require('jsonwebtoken');
const throwUnauthorizedError = require('../middlewares/throwUnauthorizedError');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  if (!token) {
    throwUnauthorizedError('Token not found');
  }
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    throwUnauthorizedError('Expired or invalid token');
  }
};

module.exports = { createToken, verifyToken };
