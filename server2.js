

import http from 'http';
import { json } from 'stream/consumers';
const PORT = 8000;

const users = [
    {id: 1, name: 'Koyah'},
    {id: 2, name: 'Koyahness'},
    {id: 3, name: 'Koyzile'},
];

const server = http.createServer( (req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json'); //another option is text/plain
        res.write(json.stringify(users)); //pass in the data
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
         res.write(json.stringify({id: 1, name: 'Koyah'})); //pass in the data
    } else {
        res.setHeader('Content-Type', 'application/json'); //another option is text/plain
        res.statusCode = 404;
        res.write(json.stringify({message: 'route not found'})); //pass in the data
        res.end();
    }
}); 

server.listen(PORT, () => { //have to listen on a port funct ion that takes in a port and a function that can do something after it connects
    console.log('server running on port :', PORT) // can create a variable for the port
});//listen to port
