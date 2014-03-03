// Application module

var app = angular.module("app", ['ui.keypress', 'ui.sortable']);


// Controller

var TreeCtrl = function($scope) {
  $scope.items = [];
  $scope.newContent = "";
  $scope.activeNode = -1;

  $scope.addItem = function() {
    if ($scope.newContent) {
      var item = {content:$scope.newContent, isBeingEdited:false};
      $scope.items.push(item);
      $scope.newContent = "";
    }
  };

  $scope.startEditing = function(item) {
    item.isBeingEdited = true;
    console.log(item);
  };

  $scope.removeItem = function(idx) {
    $scope.items.splice(idx, 1);
  };
};
