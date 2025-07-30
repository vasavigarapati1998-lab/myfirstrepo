Here are three simple examples of Node.js code to help you get started:

1. Basic HTTP Server
This code creates a basic web server that responds with "Hello, World!" when accessed.


Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
2. Reading a File
This example reads a file named example.txt and prints its content to the console.


Copy code
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
3. Simple REST API
This code creates a REST API that responds with JSON data.


Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Welcome to the API!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(4000, () => {
  console.log('API running at http://localhost:4000/api');
});
Feel free to modify these examples to suit your needs! Let me know if you'd like further assistance. 😊

