const {promisify} = require('util');
const fs = require('fs');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.lstat);

const dir = './src';

async function gatherFiles(dir) {
    try {
        let fileMetada = {
            previousDir: '',
            currentDir: dir,
        };

        let result = [];

        while(true) {
            const files = await readdir(fileMetada.currentDir);
            let trackFiles = [...files];

            fileMetada.previousDir = fileMetada.currentDir;

            for(const file of files) {
                fileMetada.currentDir = `${fileMetada.previousDir}/${file}`;

                const fileStats = await stat(fileMetada.currentDir);

                if(!fileStats.isDirectory()) {
                    result.push(file);

                    trackFiles = trackFiles.filter(trackFile => trackFile !== file);
                }
            }

            if(trackFiles.length) {
                continue;
            }

            break;
        }

        console.log(`fileMetadata..${JSON.stringify(fileMetada, null, 2)}`);
        return result;
    } catch(error) {
        return Promise.reject(error);
    }
}

gatherFiles(dir)
    .then(files => console.log(files))
    .catch(error => console.log(error));

