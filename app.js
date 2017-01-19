var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var comments = [];

app.post('/submitcomment', function (req, res) {
  console.log(req.body.comment);
  comments.push(req.body.comment);
  res.redirect('/feed.html');
});

app.get('/getcomments', function (req, res) {
  res.json(comments);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
