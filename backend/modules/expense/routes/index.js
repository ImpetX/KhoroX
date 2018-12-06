const express = require('express');
const bodyParser = require('body-parser');

const expense = require('../controllers');

const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodeParder = bodyParser.urlencoded({extended: true});

router.post('/', jsonParser, urlencodeParder, expense.create);

module.exports = router;
