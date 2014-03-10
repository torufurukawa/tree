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
    $scope.save();
  }

  $scope.dedent = function(item) {
    if (item.level > 0) {
      item.level -= 1;
    }
    $scope.save();
  }

  $scope.startEditing = function(item) {
    item.isBeingEdited = true;
  };

  $scope.finishEditing = function(item) {
    item.isBeingEdited = false;
    $scope.save();
  };

  $scope.removeItem = function(idx) {
    $scope.items.splice(idx, 1);
  };

  $scope.save = function() {
    var tree = [];

    var dump = function(items) {
      var obj = [];
      angular.forEach(items, function(item, index) {
        obj.push({content:item.content, items:dump(item.items)});
      });
      return obj;
    };

    var text = JSON.stringify(dump($scope.items));
    window.localStorage.setItem('tree', text);
  };

  // save tree on change
  $scope.$watchCollection('items', function(newValue, oldValue) {
    $scope.save();
  });

  $scope.load = function() {
    // load from local stroage
    var text = window.localStorage.getItem('tree');

    // return empty tree if not found
    if (!text) {
      return [];
    }

    // convert text into object
    return JSON.parse(text);
  };

  // Initialization
  $scope.items = $scope.load();
};
