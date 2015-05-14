var express = require('express');

var app = express();
app.use(express.static('./'));

app.get('/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/html/',
    dotfiles: 'deny'
  };

  var fileName = req.params.name + '.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(3000, function(){
  console.log('server listening on port 3000.');
});
