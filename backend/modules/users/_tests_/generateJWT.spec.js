const jwt = require('jsonwebtoken');

const generateJWT = require('../controllers/generateJWT');

describe('Generate JSON web token', () => {
    const id = 1;
    const email = 'test@test.com';
    let expectedJWT = null;

    beforeAll(() => {
        const expirationDate = new Date();

        expirationDate.setDate(expirationDate.getDate() + 60);

        expectedJWT = jwt.sign({
            id,
            email,
            exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
    });

    it(`Should return correct JWT when id is ${id} and email is ${email}`, () => {
        expect.assertions(1);
        return expect(generateJWT(id, email)).resolves.toEqual(expectedJWT);
    });

    it(`Should return false when id is 2 and email is ${email}`, () => {
        expect.assertions(1);
        return expect(generateJWT(2, email)).resolves.not.toEqual(expectedJWT);
    });

    it(`Should return false when id is ${id} and email is test@test.co`, () => {
        expect.assertions(1);
        return expect(generateJWT(id, 'test@test.co')).resolves.not.toEqual(expectedJWT);
    });

    it(`Should return false when id is 2 and email is test@test.co`, () => {
        expect.assertions(1);
        return expect(generateJWT(2, 'test@test.co')).resolves.not.toEqual(expectedJWT);
    });
});
