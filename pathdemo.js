import url from 'url';
import path from 'path';

const filePath = './dir1/dir2/test.txt';


// basename() will gv text.txt
console.log(path.basename(filePath));

// dirname() will give the directory names
console.log(path.dirname(filePath));

// get the extension name of the file
console.log(path.extname(filePath));

// parse().... give object with all the above information
console.log (path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

console.log(__filename, __dirname)
