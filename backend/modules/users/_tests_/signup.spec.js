const http = require('http');
const mongoose = require('mongoose');

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
        expect(1).toBe(1);
    });

    afterEach(done => {
        server.close(done);
    });

    afterAll(done => {
        // mongoose.connection.dropDatabase(done);
        mongoose.connection.close(done);
    });
});
