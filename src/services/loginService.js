const { User } = require('../database/models');
const { createToken } = require('../helpers/jwt');

const loginFunction = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }
  const token = createToken(email);
  return { token };
};

module.exports = { loginFunction };
