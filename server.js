var scalarium = require('scalarium'),
    http = require('http'),
    client = new require('mysql').Client();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  client.user = scalarium.db.username;
  client.password = scalarium.db.password;
  client.host = scalarium.db.host;
  client.connect();

  client.query('USE ' + scalarium.db.database);
  client.query(
    'SELECT twitter FROM speakers',
    function selectCb(err, results, fields) {
      if (err) {
        throw err;
      }

      console.log(results);
      console.log('fields:' + fields);
      res.write('<h1>Speakers</h1><ul>');
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].twitter);
        res.write('<li>' + results[i].twitter + '</li>');
      }
      res.write('</ul>');
      client.end();
      res.end();
    }
  );
}).listen(80);
