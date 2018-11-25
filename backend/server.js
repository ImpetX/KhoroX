const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/localhost.json');
const serverConfig = require('./server/configure');

let app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', `${__dirname}/views`);

app = serverConfig(app);

mongoose.connect(config.DB_URL);
mongoose.set('debug', true);

mongoose.connection.on('open', () => {
    console.log(`mongoose connected at ${config.DB_URL}`);
});

app.listen(app.get('port'), () => {
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
