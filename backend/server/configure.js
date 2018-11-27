const path = require('path');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const errorHandler = require('errorhandler');

const routes = require('./routes');
const customErrorHandler = require('./errorhandler');

const isProduction = process.env.NODE_ENV === 'production';

const corsOptions = {
    origin: 'http://localhost:3000',
};

module.exports = app => {
    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));
    app.use(morgan('dev'));
    app.use(session({
        secret: 'auth',
        cookie: {
            maxAge: 60000,
        },
        resave: false,
        saveUninitialized: false,
    }));

    if(!isProduction) {
        app.use(errorHandler());
    }

    routes(app);
    customErrorHandler(app, isProduction);

    return app;
};
