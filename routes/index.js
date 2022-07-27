const router = require('express').Router();

const {
  createUser,
  login,
  logout,
} = require('../controllers/users');

const auth = require('../middlewares/auth');
const signupValidation = require('../middlewares/signupValidation');
const signinValidation = require('../middlewares/signinValidation');
const routerUsers = require('./users');
const routerMovies = require('./movies');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', signupValidation, createUser);
router.post('/signin', signinValidation, login);
router.post('/signout', logout);
router.use(auth);
router.use('/users/me', routerUsers);
router.use('/movies', routerMovies);

router.use('*', auth, (req, res, next) => next(new NotFoundError('Несуществующий путь')));

module.exports = router;
