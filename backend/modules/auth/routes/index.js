const express = require('express');

const auth = require('../');
const authController = require('../controllers');
const router = express.Router();

router.post('/login', auth.optional, authController.login);

module.exports = router;
