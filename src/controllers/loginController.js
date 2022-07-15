const schemas = require('../valitations/loginSchemas');
const loginService = require('../services/loginService');

module.exports = {
  loginFunction: async (req, res) => {
    const { email, password } = req.body;
    const { error } = schemas.loginSchema.validate({ email, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const result = await loginService.loginFunction(email, password);
    if (result.message) {
      return res.status(400).json(result);
    }
    res.status(200).json({ token: result.token });
  },
};
