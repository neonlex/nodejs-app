var scalarium = require('scalarium'),
    http = require('http'),
    client = new require('mysql').Client();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  client.user = scalarium.db.username;
  client.password = scalarium.db.password;
  client.host = scalarium.db.host;
  client.connect();

  // do interesting stuff with the mysql client

  client.end();

  res.write('<h1>Demo</h1>');
  res.write('<p>MySQL user: ' + scalarium.db.username + '</p>');
  res.write('<p>MySQL password: ' + scalarium.db.password + '</p>');
  res.write('<p>MySQL host: ' + scalarium.db.host + '</p>');
  res.end();
}).listen(80);

