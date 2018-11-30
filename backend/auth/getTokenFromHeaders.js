const jwt = require('express-jwt');

const getTokenFromHeaders = req => {
    const {headers: {authorization}} = req;

    if(authorization && authorization.split(' ')[0] === 'Token') {
        return authorization(' ')[1];
    }

    return null;
};

module.exports = getTokenFromHeaders;
