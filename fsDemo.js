// import fs from 'fs';
import fs from 'fs/promises';

// // readFile() - Callback
// fs.readFile('./test.txt', 'UTF8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


// // readFileSync() - Synchronous
// const data = fs.readFileSync('./test.txt', 'utf8');
//  console.log(data);


 // readFile() - promise version .then( syntax) 
fs.readFile('./test.txt', 'utf8'); // this returns a promises
.then((data) => console.log(data))
.catch((err) => console.log(err));


 // readFile() - async/await // this is the best version nto use
const readFile = async () => {
    try {
const data = await fs.readFile('./test.txt', 'utf8');
console.log(data);
    } catch (error) {
        console.log(error);
    }
};

readFile();

 