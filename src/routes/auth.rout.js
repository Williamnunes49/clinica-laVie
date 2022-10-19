const { Router } = require('express')
const router = Router();
const { login } = require('../controllers/authController');
const authLogin = require('../validations/auth/login')

router.post('/login', authLogin, login);

module.exports = router;