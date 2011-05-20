var scalarium = require('scalarium'),
    http = require('http'),
    client = new require('mysql').Client();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  client.user = scalarium.db.username;
  client.password = scalarium.db.password;
  client.host = scalarium.db.host;
  client.connect();

  // do interesting stuff with the mysql client

  client.end();
  res.end();
}).listen(80);
