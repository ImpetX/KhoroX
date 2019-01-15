const http = require('http');
const signup = require('../controllers/signup');
const app = require('../../../server');

describe('Sign up controller', () => {
    let server;

    beforeAll(done => {
        server = http.createServer(app);

        server.listen(done);
    });

    test('dummy test', () => {
        expect(1).toEqual(1);
    });

    afterAll(done => {
        server.close(done);
    });
});
