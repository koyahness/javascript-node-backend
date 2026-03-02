import http, { request } from 'http';
import { json } from 'stream/consumers';
const PORT = 8000;

//APIs commony return data in JSON format (Javascript Object Notation) other formats are csv
//RESTful APIs commony return data in JSON format (Javascript Object Notation)
//data will be from API endpoints, public APIs, external sources, your own backend/ database eg /users. /products

const users = [
    {id: 1, name: 'Koyah'},
    {id: 2, name: 'Koyahness'},
    {id: 3, name: 'Koyzile'},
];

// logger middleware... middleware are functions handling requests, such as auth, logging
const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};

const server = http.createServer( (req, res) => {

    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json'); //another option is text/plain
        res.write(json.stringify(users)); //pass in the data
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        console.log(id);
        const user = user.find((user) => user.id === parseInt(id));

        if (user) {
             res.setHeader('Content-Type', 'application/json'); //another option is text/plain
             res.write(json.stringify({user})); //pass in the data
             res.end();
        } else {
            res.setHeader('Content-Type', 'application/json'); //another option is text/plain
            res.statusCode = 404;
            res.write(json.stringify({message: 'User not found'})); //pass in the data
            res.end();
        }

    } else {
        res.setHeader('Content-Type', 'application/json'); //another option is text/plain
        res.statusCode = 404;
        res.write(json.stringify({message: 'route not found'})); //pass in the data
        res.end();
    }

    });

}); 

server.listen(PORT, () => { //have to listen on a port funct ion that takes in a port and a function that can do something after it connects
    console.log('server running on port :', PORT) // can create a variable for the port
});//listen to port
