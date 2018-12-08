const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

const routes = require('./routes');
const customErrorHandler = require('./errorhandler');
const passport = require('../modules/auth/config/passport');

const isProduction = process.env.NODE_ENV === 'production';

const corsOptions = {
    origin: 'http://localhost:3000',
};

module.exports = app => {
    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'auth',
        cookie: {
            maxAge: 60000,
        },
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    if(!isProduction) {
        app.use(errorHandler());
    }

    routes(app);
    customErrorHandler(app, isProduction);

    return app;
};
