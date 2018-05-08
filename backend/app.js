const express = require('express');

let app = express();

app.set('port', process.env.PORT || 3001);
app.set('views', `${__dirname}/views`);

app.listen(app.get('port'), () => {
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
