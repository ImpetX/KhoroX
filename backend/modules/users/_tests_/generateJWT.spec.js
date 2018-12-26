const generateJWT = require('../controllers/generateJWT');
const server = require('../../../server');

const {boot, shutdown} = server;

describe('Generate JSON web token', () => {
    beforeAll(() => {
        boot();
    });

    // write tests here

    afterAll(() => {
        shutdown();
    });
});
