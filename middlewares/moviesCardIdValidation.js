const { celebrate, Joi } = require('celebrate');

const moviesCardIdValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  }),
});

module.exports = moviesCardIdValidation;
