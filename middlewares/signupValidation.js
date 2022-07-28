const { celebrate, Joi } = require('celebrate');

const signupValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'any.required': 'Это поле должно быть заполнено',
      'string.email': 'Неверный формат электронной почты',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .messages({
        'any.required': 'Это поле должно быть заполнено',
        'string.min': 'Поле должно содержать не менее 2 символов',
        'string.max': 'Поле должно содержать не более 30 символов',
      }),
  }),
});

module.exports = signupValidation;
