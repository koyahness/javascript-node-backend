import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world';

//url_obj, url constructor
const urlObj = new URL(urlString);
console.log(urlObj)

//format
console.log(url.format(urlObj));

//import.meta.url - file url
console.log(import.meta.url)

//fileURLToPath
console.log(url.fileURLToPath(import.meta.url))


