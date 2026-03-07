import path from 'path';

const filePath = './dir1/dir2/test.txt';


// basename() will gv text.txt
console.log(path.basename(filePath));

// dirname() will give the directory names
console.log(path.dirname(filePath));

// get the extension name of the file
console.log(path.extname(filePath));

// parse()
console.log (path.parse(filePath))
