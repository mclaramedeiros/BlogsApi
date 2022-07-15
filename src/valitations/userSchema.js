const Joi = require('joi');

const userSchema = Joi.object().keys({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6).required(),
  image: Joi.string().uri().required(),
});

module.exports = {
  userSchema,
};
