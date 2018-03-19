const path = require('path');
const express = require('express');

let app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/public', express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), () => {
    console.log(`Server up: http://localhost:${app.get('port')}`);
});