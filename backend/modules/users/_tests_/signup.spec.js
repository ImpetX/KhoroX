const signup = require('../controllers/signup');
const server = require('../../../server');

const {boot, shutdown} = server;

describe('Sign up controller', () => {
    beforeAll(() => {
        return Promise.resolve(boot());
    });

    test('dummy test', () => {
        expect(1).toEqual(1);
    });

    // afterAll(async () => {
    //     shutdown();
    // });
});
