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

const getUsers = async () => {
  const users = await User.findAll({
    raw: true,
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
    const user = await User.findOne({
      where: { id },
      raw: true,
    });
    if (!user) {
      return { message: 'User does not exist' };
    }
    const { password, ...newUser } = user;
    return newUser;
  };

module.exports = { userFunction, getUsers, getUserById };
