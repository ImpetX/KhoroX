/*
    Do not use Jest's default jsdom test environment when testing Mongoose apps, unless you are explicitly testing an application that only uses Mongoose's browser library.

    The jsdom test environment attempts to create a browser-like test environment in Node.js, and it comes with numerous nasty surprises like a stubbed setTimeout() function that silently fails after tests are finished. Mongoose does not support jsdom in general and is not expected to function correctly in the jsdom test environment.
*/

module.exports = {
    testEnvironment: 'node',
};
