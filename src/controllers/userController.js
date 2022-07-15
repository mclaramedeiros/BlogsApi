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
};
