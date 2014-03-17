// Application module

var app = angular.module('app', ['ui.keypress', 'ui.sortable']);


// Controller

var TreeCtrl = function($scope) {
  $scope.items = [];
  $scope.newContent = '';
  $scope.activeNode = -1;
  var MAX_LEVEL = 9;

  $scope.addItem = function() {
    if ($scope.newContent) {
      var item = {content:$scope.newContent, isBeingEdited:false, items:[]};
      $scope.items.push(item);
      $scope.newContent = '';
    }
  };

  $scope.indent = function(item) {
    if (item.level < MAX_LEVEL) {
      item.level += 1;
    }
  }

  $scope.dedent = function(item) {
    if (item.level > 0) {
      item.level -= 1;
    }
  }

  $scope.startEditing = function(item) {
    item.isBeingEdited = true;
  };

  $scope.finishEditing = function(item) {
    item.isBeingEdited = false;
  };

  $scope.removeItem = function(idx) {
    $scope.items.splice(idx, 1);
  };

};
