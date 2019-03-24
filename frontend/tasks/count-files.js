const recursiveReadDir = require('recursive-readdir');

recursiveReadDir('./src')
    .then(files => console.log(files.length))
    .catch(error => console.error(error));
