const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/localhost.json');
const serverConfig = require('./server/configure');

let app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', `${__dirname}/views`);

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
mongoose.set('debug', true);

app = serverConfig(app);

mongoose.connection.on('open', () => {
    // eslint-disable-next-line no-console
    console.log(`mongoose connected at ${config.DB_URL}`);
});

const server = http.createServer(app);

const boot = () => {
    server.listen(app.get('port'), () => {
        // eslint-disable-next-line no-console
        console.log(`Server up: http://localhost:${app.get('port')}`);
    });
};

const shutdown = () => {
    server.close(process.exit);
};

if(require.main === module) {
    boot();
} else {
    // eslint-disable-next-line no-console
    console.info('running app for testing');

    exports.boot = boot;
    exports.shutdown = shutdown;
    exports.port = app.get('port');
}
