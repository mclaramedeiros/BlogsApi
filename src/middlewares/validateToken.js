const { verifyToken } = require('../helpers/jwt');

module.exports = {
  validateToken: async (req, res, next) => {
    const token = req.headers.authorization;
    await verifyToken(token);
    next();
  },
};
