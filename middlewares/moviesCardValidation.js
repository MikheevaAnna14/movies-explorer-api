const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const BadRequest = require('../errors/BadRequest');

const moviesCardValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    director: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    duration: Joi.number().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    year: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    description: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    image: Joi.string()
      .required()
      .messages({
        'any.required': 'Это поле должно быть заполнено',
      })
      .custom((value) => {
        if (!validator.isURL(value, { require_protocol: true })) {
          throw new BadRequest('Неправильный формат ссылки на изображение');
        }
        return value;
      }),
    trailerLink: Joi.string()
      .required()
      .messages({
        'any.required': 'Это поле должно быть заполнено',
      })
      .custom((value) => {
        if (!validator.isURL(value, { require_protocol: true })) {
          throw new BadRequest('Неправильный формат ссылки на изображение');
        }
        return value;
      }),
    thumbnail: Joi.string()
      .required()
      .messages({
        'any.required': 'Это поле должно быть заполнено',
      })
      .custom((value) => {
        if (!validator.isURL(value, { require_protocol: true })) {
          throw new BadRequest('Неправильный формат ссылки на изображение');
        }
        return value;
      }),
    owner: Joi.string().length(24).hex(),
    movieId: Joi.number()
      .required()
      .messages({
        'any.required': 'Это поле должно быть заполнено',
      }),
    nameRU: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
    nameEN: Joi.string().required().messages({
      'any.required': 'Это поле должно быть заполнено',
    }),
  }),
});

module.exports = moviesCardValidation;
