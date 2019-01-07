const signup = require('../controllers/signup');
const server = require('../../../server');

const {boot, shutdown} = server;

describe('Sign up controller', () => {
    beforeAll(async () => {
        try {
            await boot();
        } catch (err) {
            console.log('error...', err);
        }
    });

    test('dummy test', () => {
        expect(1).toEqual(1);
    });

    afterAll(async () => {
        try {
            await shutdown();
        } catch (err) {
            console.log('error...', err);
        }
    });
});
