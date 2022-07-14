const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { createToken, verifyToken };
