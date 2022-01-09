var express = require('express');
var server = express();
var port = 3000;

server.use(express.static('src/client'));

server.listen(port);
console.log(`server responding at http://localhost:${port}`);