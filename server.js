var exec = require('child_process').exec,
    child;
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  exec('hostname', function(error, stdout, stderr) {
    res.end('<h1>This is node.js ' + process.version + '</h1>' + '</br>' + stdout);
  });
}).listen(80);
