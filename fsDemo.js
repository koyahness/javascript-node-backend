import fs from 'fs';

// readFile() - Callback
fs.readFile('./test.txt', 'UTF8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

