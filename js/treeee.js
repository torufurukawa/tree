// Application module

var app = angular.module("app", ['ui.keypress', 'ui.sortable']);


// Controller

var TreeCtrl = function($scope) {
  $scope.items = [];
  $scope.newContent = "";
  $scope.activeNode = -1;

  $scope.addItem = function() {
    if ($scope.newContent) {
      $scope.items.push($scope.newContent);
      $scope.newContent = "";
    }
  };

  $scope.startEditing = function(item) {
    console.log(item);
  };

  $scope.removeItem = function(idx) {
    $scope.items.splice(idx, 1);
  };
};
