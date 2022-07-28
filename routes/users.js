const router = require('express').Router();

const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');
const userUpdateValidation = require('../middlewares/userUpdateValidation');

router.get('/', getCurrentUser);
router.patch('/', userUpdateValidation, updateUser);

module.exports = router;
