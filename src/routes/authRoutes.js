const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');

router.get('/login', authControllers.getLogin);
router.post('/login', authControllers.saveLogin);
router.get('/register', authControllers.getRegister);
router.post('/register', authControllers.saveRegister);
router.get('/logout', authControllers.logout);

module.exports = router;