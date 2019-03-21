const {promisify} = require('util');
const fs = require('fs');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.lstat);

const dir = './src';

async function gatherFiles(dir) {
    try {
        let result = [];

        const files = await readdir(dir);

        for(const file of files) {
            const stats = await stat(`${dir}/${file}`);

            if(!stats.isDirectory()) {
                result.push(file);
            }
        }

        return result;
    } catch(error) {
        return Promise.reject(error);
    }
}

gatherFiles(dir)
    .then(files => console.log(files))
    .catch(error => console.log(error));

