// this will be a new enrty point for server related stuff
// working with the http module that included in node.js
//  used for creating HTTP servers and client

import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("Hello"); //send some text to the client which is the browser in our case
    res.end(); //send some text to the client which is the browser in our case
}); //method to create server that take in function that will have a request and responses

server.listen(PORT, () => { //have to listen on a port funct ion that takes in a port and a function that can do something after it connects
    console.log('server running on port :', PORT) // can create a variable for the port
});//listen to port 

//at this point should be able to run the server; which then takes over the terminal



 