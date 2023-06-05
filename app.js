const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });//I want to listen for the data event. the data event will be fired whenever a new chunk is ready to be read.
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();//buffer is our bus stop. I know the incoming data will be text.
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');//location is the default header accepted by the browser. Using slash means it
            //will use the host we are already running on.
            return res.end();
        });//this will be fired once it is done parsing the incoming requests data or incoming requests general
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
