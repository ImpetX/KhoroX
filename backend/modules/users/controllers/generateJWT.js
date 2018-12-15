const jwt = require('jsonwebtoken');

function generateJWT(id, email) {
    const today = new Date();
    const expirationDate = new Date(today);

    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        id,
        email,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

module.exports = generateJWT;
