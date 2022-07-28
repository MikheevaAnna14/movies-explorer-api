const router = require('express').Router();

const moviesCardValidation = require('../middlewares/moviesCardValidation');
const moviesCardIdValidation = require('../middlewares/moviesCardIdValidation');
const {
  createMoviesCard,
  getMovies,
  deleteMoviesCard,
} = require('../controllers/movies');

router.post('/', moviesCardValidation, createMoviesCard);
router.get('/', moviesCardValidation, getMovies);
router.delete('/:movieId', moviesCardIdValidation, deleteMoviesCard);
module.exports = router;
