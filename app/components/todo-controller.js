import app from "../app.module.js"
app.controller("todoController",[ "$scope", "$resource",function($scope, $resource){
  this.todos = [
    // {
    //   "title": "todo",
    //   "cards": [
    //     {
    //       "id":"1",
    //       "title": "card1",
    //       "description": "descr1"
    //     },
    //     {
    //       "id": "2",
    //       "title": "card2",
    //       "description": "descr2"
    //     },
    //     {
    //       "id": "3",
    //       "title": "card3",
    //       "description": "descr3"
    //     }
    //   ]
    // },
    // {
    //   "title": "inProgress",
    //   "cards": [
    //     {
    //       "id": "4",
    //       "title": "card4",
    //       "description": "descr4"
    //     },
    //     {
    //       "id": "5",
    //       "title": "card5",
    //       "description": "descr5"
    //     },
    //     {
    //       "id": "6",
    //       "title": "card6",
    //       "description": "descr6"
    //     }
    //   ]
    // },
    // {
    //   "title": "test",
    //   "cards": [
    //     {
    //       "id": "7",
    //       "title": "card7",
    //       "description": "descr7"
    //     },
    //     {
    //       "id": "8",
    //       "title": "card8",
    //       "description": "descr8"
    //     },
    //     {
    //       "id": "9",
    //       "title": "card9",
    //       "description": "descr9"
    //     }
    //   ]
    // },
    // {
    //   "title": "done",
    //   "cards": [
    //     {
    //       "id": "10",
    //       "title": "card10",
    //       "description": "descr10"
    //     },
    //     {
    //       "id": "11",
    //       "title": "card11",
    //       "description": "descr11"
    //     },
    //     {
    //       "id": "12",
    //       "title": "card12",
    //       "description": "descr12"
    //     }
    //   ]
    // }
  ];
  $resource("/todos",{},{}).query({},(todos)=>{
    console.log(this.todos);
    this.todos=todos;
  })
  this.title = "";
  this.description = "";
  this.addTodoCard = (title, description) => {
    const newCard = {title,description};
    this.todos[0].cards.push(newCard);
    // $resource("/todo/add",{},{}).post(newCard, console.log,console.error);
  };
  $scope.$on("moveCardToLeft", (e,{idCard, numberColumn})=>{
    if(numberColumn == 0){
      return;
    }
    const selectedCardIndex = this.todos[numberColumn].cards.findIndex((card)=> card.id == idCard);
    const selectedCard = this.todos[numberColumn].cards[selectedCardIndex]
    this.todos[numberColumn-1].cards.push(selectedCard);
    this.todos[numberColumn].cards.splice(selectedCardIndex,1)

  });
  $scope.$on("moveCardToRight", (e,{idCard, numberColumn})=>{
    if(numberColumn == this.todos.length-1){
      return;
    }
    const selectedCardIndex = this.todos[numberColumn].cards.findIndex((card)=> card.id == idCard);
    const selectedCard = this.todos[numberColumn].cards[selectedCardIndex]
    this.todos[numberColumn+1].cards.push(selectedCard);
    this.todos[numberColumn].cards.splice(selectedCardIndex,1)

  });
}]);
