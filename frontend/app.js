const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack/webpack.dev.js');

let app = express();
const compiler = webpack(webpackConfig);

app.set('port', process.env.PORT || 3000);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: '/assets/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}));

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res, next) => {
    const err = new Error((`${req.ip} tried to reach ${req.originalUrl}`));

    err.statusCode = 404;
    err.shouldRedirect = true;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err.message);

    if (!err.statusCode) {
        err.statusCode = 500;
    }

    if (err.shouldRedirect) {
        res.render('error');
    } else {
        console.error(err.statusCode);
    }
});

app.listen(app.get('port'), () => {
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
