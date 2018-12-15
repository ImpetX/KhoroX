const express = require('express');

const auth = require('../../auth');
const authController = require('../controllers');
const router = express.Router();

router.post('/signup', auth.optional, authController.signup);
router.post('/login', auth.optional, authController.login);

module.exports = router;
