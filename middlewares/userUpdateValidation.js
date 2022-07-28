const { celebrate, Joi } = require('celebrate');

const userUpdateValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().messages({
      'string.email': 'Неверный формат электронной почты',
    }),
    name: Joi.string()
      .min(2)
      .max(30)
      .messages({
        'string.min': 'Поле должно содержать не менее 2 символов',
        'string.max': 'Поле должно содержать не более 30 символов',
      }),
  }),
});

module.exports = userUpdateValidation;
