const express = require('express');

const loginRoute = require('../modules/auth/routes');
const expenseRoute= require('../modules/expense/routes');
const router = express.Router();

module.exports = app => {
    router.use(loginRoute);
    router.use(expenseRoute);

    app.use(router);
};
