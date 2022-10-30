const { celebrate, Joi } = require('celebrate');

const moviesCardIdValidation = celebrate({
  params: Joi.object().keys({
    // movieId: Joi.string().hex().length(24),
    movieId: Joi.string().hex(),
  }),
});

module.exports = moviesCardIdValidation;
