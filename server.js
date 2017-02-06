const express = require('express');  
const app = express();
const routings = require('./routings.js');
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
app.use('/', routings);
// app.get('/', function(req, res){
//   res.send("<h2>Welcom to express world!</h2>");
// });

app.listen(3000, function(){
  console.log("Server strated at localhost:3000");
});