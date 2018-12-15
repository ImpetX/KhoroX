const express = require('express');

const authRoute = require('../modules/users/routes');
const expenseRoute= require('../modules/expense/routes');

const router = express.Router();

module.exports = app => {
    router.use(authRoute);
    router.use(expenseRoute);

    app.use(router);
};
