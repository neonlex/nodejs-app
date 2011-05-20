var scalarium = require('scalarium'),
    http = require('http'),
    client = new (require('memcache').Client)(scalarium.memcached.port, scalarium.memcached.host);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  client.connect();

  // do interesting stuff with the memcache client

  client.close();
  res.end();
}).listen(80);
