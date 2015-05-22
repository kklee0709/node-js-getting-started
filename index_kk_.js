var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// A face
app.get('/', function(request, response) {
  console.log("app.get('/' called");

  response.send(cool());
});

// More faces
app.get('/more', function(request, response) {
  console.log("app.get('/more' called");

  var result = ''
  var times = process.env.TIMES || 5
  for (i=0; i < times; i++)
    result += cool();
  response.send(result);
});

// Provision a database
// https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
app.get('/db', function (request, response) {
  console.log("app.get('/db' called");

  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))

})
