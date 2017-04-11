var mongoose = require('mongoose');
var mongoDB = 'mongodb://Maxim:qwerty@ds143900.mlab.com:43900/todo-app'

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
