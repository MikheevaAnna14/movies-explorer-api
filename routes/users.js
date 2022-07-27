const router = require('express').Router();

const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

router.get('/', getCurrentUser);
router.patch('/', updateUser);

module.exports = router;
