const schemas = require('../valitations/userSchema');
const userService = require('../services/userService');
const { verifyToken } = require('../helpers/jwt');

module.exports = {
  userFunction: async (req, res) => {
    const { email, password, displayName, image } = req.body;
    const user = { email, password, displayName, image };
    const { error } = schemas.userSchema.validate(user);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const result = await userService.userFunction(user);
    if (result.message) {
      return res.status(409).json(result);
    }
    res.status(201).json({ token: result.token });
  },
  getUsers: async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  },
};
