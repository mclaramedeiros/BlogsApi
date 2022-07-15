const { User } = require('../database/models');
const { createToken } = require('../helpers/jwt');

const userFunction = async (user) => {
  const userExists = await User.findOne({ where: { email: user.email } });
  if (userExists) {
    return { message: 'User already registered' };
  }
  const { password, ...rest } = user;
  await User.create(user);
  const token = createToken(rest);
  return { token };
};

module.exports = { userFunction };
