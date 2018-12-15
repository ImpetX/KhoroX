const express = require('express');
const bodyParser = require('body-parser');

const expense = require('../controllers');

const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({extended: true});

router.post('/', jsonParser, urlencodeParser, expense.create);

module.exports = router;
