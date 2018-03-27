const path = require('path');
const express = require('express');

let app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('(/|/about)', (req, res) => {
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
