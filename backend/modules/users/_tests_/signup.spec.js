const http = require('http');
const mongoose = require('mongoose');

const signup = require('../controllers/signup');
const app = require('../../../server');
const {DB_URL_TEST} = require('../../../config/localhost.json');

describe('Sign up controller', () => {
    let server;

    beforeAll(async () => {
        await mongoose.connect(DB_URL_TEST, {
            useNewUrlParser: true,
            useCreateIndex: true,
        });
    });

    beforeEach(done => {
        server = http.createServer(app);

        server.listen(done);
    });

    test('dummy test', () => {
        expect(1).toEqual(1);
    });

    afterEach(done => {
        server.close(done);
    });

    afterAll(done => {
        mongoose.connection.close(done);
    });
});
