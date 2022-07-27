const router = require('express').Router();

const moviesCardValidation = require('../middlewares/moviesCardValidation');
const {
  createMoviesCard,
  getMovies,
  deleteMoviesCard,
} = require('../controllers/movies');

router.post('/', moviesCardValidation, createMoviesCard);
router.get('/', moviesCardValidation, getMovies);
router.delete('/:movieId', deleteMoviesCard);
module.exports = router;
