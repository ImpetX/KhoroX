const jwt = require('jsonwebtoken');

const generateJWT = require('../controllers/generateJWT');

describe('Generate JSON web token', () => {
    const id = 1;
    const email = 'test@test.com';
    let expectedJWT = null;

    beforeEach(() => {
        const expirationDate = new Date();

        expirationDate.setDate(expirationDate.getDate() + 60);

        expectedJWT = jwt.sign({
            id,
            email,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    });

    it(`Should return correct JWT when id is ${id} and email is ${email}`, () => {
        expect(generateJWT(id, email)).toEqual(expectedJWT);
    });

    it(`Should return false when id is 2 and email is ${email}`, () => {
        expect(generateJWT(2, email)).not.toEqual(expectedJWT);
    });

    it(`Should return false when id is ${id} and email is test@test.co`, () => {
        expect(generateJWT(id, 'test@test.co')).not.toEqual(expectedJWT);
    });

    it(`Should return false when id is 2 and email is test@test.co`, () => {
        expect(generateJWT(2, 'test@test.co')).not.toEqual(expectedJWT);
    });
});
