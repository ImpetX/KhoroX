const http = require('http');
const mongoose = require('mongoose');

const signup = require('../controllers/signup');
const User = require('../models');
const app = require('../../../server');
const {DB_URL_TEST} = require('../../../config/localhost.json');

function requestBody(email, password) {
    return {
        email,
        password,
    };
}

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

    it('Should send response {"duplicateEmail": true} if the provided email address is already existing', () => {
        
    });

    afterEach(done => {
        server.close(done);
    });

    afterAll(done => {
        mongoose.connection.close(done);
    });
});
