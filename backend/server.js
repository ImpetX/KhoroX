const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/localhost.json');
const serverConfig = require('./server/configure');

let app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', `${__dirname}/views`);

mongoose.connect(config.DB_URL, {useNewUrlParser: true});
mongoose.set('debug', true);

app = serverConfig(app);

mongoose.connection.on('open', () => {
    // eslint-disable-next-line no-console
    console.log(`mongoose connected at ${config.DB_URL}`);
});

app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
