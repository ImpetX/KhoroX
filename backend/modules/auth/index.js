const jwt = require('express-jwt');

function getTokenFromHeaders(req) {
    const {headers: {authorization}} = req;

    if(authorization && authorization.split(' ')[0] === 'Token') {
        return authorization(' ')[1];
    }

    return null;
}

const auth = {
    required: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: 'secret',
        userProperty: 'payload',
        getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};

module.exports = auth;
