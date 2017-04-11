const controller = function ($scope){
  this.moveToLeft = (idCard, numberColumn) =>{
    $scope.$emit("moveCardToLeft", {idCard, numberColumn});
  };
  this.moveToRight = (idCard, numberColumn) =>{
    $scope.$emit("moveCardToRight", {idCard, numberColumn});
  };
}

export default ["$scope",controller]
