var express = require('express');
var router = express.Router();

var Todos = require('../db/models.js');

router.post("/add", function(req,res){
  console.log("!");
});

// router.put("/move", function(req,res){
//   Todos.find({
//     id: req.body.id
//   }, function(err,data){
//     if(numberColumn == 0){
//       return;
//     }
//     const selectedCardIndex = this.todos[numberColumn].cards.findIndex((card)=> card.id == idCard);
//     const selectedCard = this.todos[numberColumn].cards[selectedCardIndex]
//     this.todos[numberColumn-1].cards.push(selectedCard);
//     this.todos[numberColumn].cards.splice(selectedCardIndex,1)
//
//   });
//
// });
module.exports = router;
