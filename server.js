'use strict';
var express = require('express');
var app = express();
var db  = require('./server/db/db.js');
var bodyParser = require('body-parser');

var todoCard = require('./server/routes/todo-card.js');
var todos = require('./server/routes/todos.js');

app.use(express.static(__dirname + '/dist'));

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/todo', todoCard);
app.use('/todos', todos);


app.get('/', function (req, res) {
  res.status(200).sendFile('./index.html');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
