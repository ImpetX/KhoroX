const jwt = require('jsonwebtoken');

async function generateJWT(id, email) {
    const expirationDate = new Date();

    expirationDate.setDate(expirationDate.getDate() + 60);

    return jwt.sign({
        id,
        email,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

module.exports = generateJWT;
