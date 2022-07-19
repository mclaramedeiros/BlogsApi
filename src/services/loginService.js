const { User } = require('../database/models');
const { createToken } = require('../helpers/jwt');

const loginFunction = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }

  const { password: pass, ...userData } = user.dataValues;

  const token = createToken(userData);
  return { token };
};

module.exports = { loginFunction };
