// this will be a new enrty point for server related stuff
// working with the http module that included in node.js
//  used for creating HTTP servers and client

import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // req is incoming request like url or headers....from clients, browsers, apps, scripts to nodejs servers
    // res is used to send response back from the requests... the server processes requests and sends back data in html or json... status codes
    //they are callbacks for requests and responses

        try {
            //check if its a get request
            if (req.method === 'GET') {

            //create a router, a manual one... some of these things are handled in framworks like express
                if (req.url === '/') {
                res.setHeader('Content-Type', 'text/html'); //another option is text/plain
                // res.statusCode = 404;
                res.write("<h1>Home Page</h1>"); //send some text to the client which is the browser in our case
                res.end(); //send some text to the client which is the browser in our case
                } else if (req.url === '/about') {
                    res.setHeader('Content-Type', 'text/html'); //another option is text/plain
                // res.statusCode = 404;
                res.write("<h1>About</h1>"); //send some text to the client which is the browser in our case
                res.end();
                } else {
                    res.writeHead(404, {'Content-Type': 'text/html'}); //another option is text/plain
                // res.statusCode = 404;
                res.write("<h1>No Page</h1>"); //send some text to the client which is the browser in our case
                res.end();
                }
                
            } else {

                throw new Error("Method not allowed"); 
            }

        } catch (error) {

        }



   

}); //method to create server that take in function that will have a request and responses

server.listen(PORT, () => { //have to listen on a port funct ion that takes in a port and a function that can do something after it connects
    console.log('server running on port :', PORT) // can create a variable for the port
});//listen to port 

//at this point should be able to run the server; which then takes over the terminal



 