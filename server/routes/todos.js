var express = require('express');
var router = express.Router();

var Todos = require('../db/models.js');

router.get("/", function(req,res){
  Todos.find({}, function(err,todos){
    res.status(200).json(todos);
  })
});

module.exports = router;
