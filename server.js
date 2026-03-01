// this will be a new enrty point for server related stuff
// working with the http module that included in node.js
//  used for creating HTTP servers and client

import http from 'http';
import fs from 'fs/promises'; //ther are mutliple ways to use the fs module to read and write files
//there is asynchronous, synchronous (which you dont usually want to use) and promise version
import url from "url";
import path from "path";
const PORT = 8000;

//Get current paths
const _filename = url.fileURLToPath(import.meta.url); //give path of the current file that you are in
const _dirname = path.dirname(_filename); //full path to the file

const server = http.createServer(async (req, res) => {
    // req is incoming request like url or headers....from clients, browsers, apps, scripts to nodejs servers
    // res is used to send response back from the requests... the server processes requests and sends back data in html or json... status codes
    //they are callbacks for requests and responses

        try {
            //check if its a get request
            if (req.method === 'GET') {

                let filePath;

                console.log(req.url); //checks the url the user is on
                console.log(req.method); //checks the method of the website page
                console.log(_filename, _dirname); //checks the method of the website page

            //create a router, a manual one... some of these things are handled in framworks like express
                if (req.url === '/') {
                    filePath = path.join(_dirname, "public", "index.html")
                // res.setHeader('Content-Type', 'text/html'); //another option is text/plain
                // res.statusCode = 404;
                // res.write("<h1>Home Page</h1>"); //send some text to the client which is the browser in our case
                // res.end(); //send some text to the client which is the browser in our case
                } else if (req.url === '/about') {
                     filePath = path.join(_dirname, "public", "about.html")
                    // res.setHeader('Content-Type', 'text/html'); //another option is text/plain
                // res.statusCode = 404;
                // res.write("<h1>About</h1>"); //send some text to the client which is the browser in our case
                // res.end();
                } else {
                //     res.writeHead(404, {'Content-Type': 'text/html'}); //another option is text/plain
                // // res.statusCode = 404;
                // res.write("<h1> 404 Page not found</h1>"); //send some text to the client which is the browser in our case
                // res.end();
                }

                const data = await fs.readFile(filePath);
                res.setHeader('Content-Type', 'text/html'); //another option is text/html
                 res.write(data); //pass in the data
                res.end();



            } else {

                throw new Error("Method not allowed"); 
            }

        } catch (error) {
            // if there is another error going on make it a server error, which is 500

            res.writeHead(500, {'Content-Type': 'text/plain'}); //another option is text/plain
                // res.statusCode = 404;
                res.write("500: server error"); //send some text to the client which is the browser in our case
                res.end();

        } 

}); //method to create server that take in function that will have a request and responses



server.listen(PORT, () => { //have to listen on a port funct ion that takes in a port and a function that can do something after it connects
    console.log('server running on port :', PORT) // can create a variable for the port
});//listen to port 

//at this point should be able to run the server; which then takes over the terminal



 