const Joi = require('joi');

const message = 'Some required fields are missing';

const postSchema = Joi.object().keys({
  title: Joi.string().required().messages({
    'string.title': message,
    'string.required': message,
    'string.empty': message,
  }),
  content: Joi.string().required().messages({
    'string.required': message,
    'string.empty': message,
  }),
  categoryIds: Joi.array()
    .items(Joi.number().required())
    .required()
    .messages({ 'array.required': message }),
});

module.exports = { postSchema };
