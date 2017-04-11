var mongoose = require('mongoose');

var TodosSchema = mongoose.Schema({
    title: String,
    cards: [{
    	title: String,
    	description: String,
    }]
});

module.exports = mongoose.model('Todos', TodosSchema);
