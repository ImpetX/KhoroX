const express = require('express');
const bodyParser = require('body-parser');

require('./login');
require('./current');
const expense = require('../../controllers/expense');

const router = express.Router();
const jsonParser = bodyParser.json();
const urlencodeParder = bodyParser.urlencoded({extended: true});

module.exports = app => {
    router.post('/', jsonParser, urlencodeParder, expense.create);

    app.use(router);
};
