const schemas = require('../valitations/userSchema');
const userService = require('../services/userService');

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
  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (user.message) {
      return res.status(404).json({ message: user.message });
    }
    res.status(200).json(user);
  },
};
