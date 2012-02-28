var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('/tmp/dhdbg', function (err, data) {
    res.end('<h1>This is node.js ' + process.version + '</h1><pre>' + data + '</pre>');
  });
}).listen(80);
