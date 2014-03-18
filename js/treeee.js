// Application module

var app = angular.module('app', ['ui.keypress', 'ui.sortable']);


// Controllers

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
};


var ValueCtrl = function($scope) {
  $scope.startEditing = function(value) {
    value.isBeingEdited = true;
  };

  $scope.finishEditing = function(value) {
    value.isBeingEdited = false;
  };
};
