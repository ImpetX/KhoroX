const jwt = require('jsonwebtoken');

const generateJWT = require('../controllers/generateJWT');

describe('Generate JSON web token', () => {
    const id = 1;
    const email = 'test@test.com';
    let expectedJWT = null;

    beforeEach(() => {
        const today = new Date();
        const expirationDate = new Date(today);

        expirationDate.setDate(today.getDate() + 60);

        expectedJWT = jwt.sign({
            id,
            email,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    });

    it(`Should return correct JWT when id is ${id} and email is ${email}`, () => {
        expect(generateJWT(id, email)).toEqual(expectedJWT);
    });
});
