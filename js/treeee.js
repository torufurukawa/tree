// Application module

var app = angular.module('app', ['ui.keypress', 'ui.sortable']);


// Controller

var TreeCtrl = function($scope) {
  $scope.items = new TreeElement(null);
  $scope.newContent = '';

  $scope.addItem = function() {
    if ($scope.newContent) {
      var value = {content:$scope.newContent, isBeingEdited:false};
      var item = new TreeElement(value);
      $scope.items.append(item);
      $scope.newContent = '';
    }
  };

  $scope.removeItem = function(item) {
    item.remove();
  };

  $scope.indent = function(item) {
  }

  $scope.dedent = function(item) {
  }

  $scope.startEditing = function(item) {
    item.isBeingEdited = true;
  };

  $scope.finishEditing = function(item) {
    item.isBeingEdited = false;
  };
};
