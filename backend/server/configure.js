const path = require('path');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const corsOptions = {
    origin: 'http://localhost:3000'
};

module.exports = app => {
    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));

    routes(app);

    return app;
};
