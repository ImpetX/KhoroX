const express = require('express');
const mongoose = require('mongoose');

const {DB_URL} = require('./config/localhost.json');
const serverConfig = require('./server/configure');

let app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', `${__dirname}/views`);

if(require.main === module) {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
    })
        .then(() => {
            // eslint-disable-next-line no-console
            console.log(`mongoose connected at ${DB_URL}`);
        }).catch(err => {
            // eslint-disable-next-line no-console
            console.error(err);
        });

    mongoose.set('debug', true);
}

app = serverConfig(app);

if(require.main === module) {
    app.listen(app.get('port'), () => {
        // eslint-disable-next-line no-console
        console.log(`Server up: http://localhost:${app.get('port')}`);
    });
} else {
    // eslint-disable-next-line no-console
    console.info('running app for testing');

    module.exports = app;
}
