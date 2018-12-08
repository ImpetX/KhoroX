const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../');
const authController = require('../controllers');
const router = express.Router();

router.post('/signup', auth.optional, authController.signup);
router.post('/login', auth.optional, authController.login);

module.exports = router;
