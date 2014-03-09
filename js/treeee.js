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
      var item = {content:$scope.newContent, isBeingEdited:false, level: 0};
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
    // build object
    var tree = [];
    angular.forEach($scope.items, function(obj, i) {
      var item = angular.copy(obj);
      delete item.isBeingEdited;
      tree.push(item);
    });

    // save on local storage
    var text = JSON.stringify(tree);
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
    var items = JSON.parse(text);
    angular.forEach(items, function(obj, i) {
      obj.isBeingEdited = false;
    });

    return items;
  };

  $scope.range = function(num) {
    var a = new Array();
    for (i = 0; i < num; i++) {
        a[i] = i;
    };
    return a;
  };

  // Initialization
  $scope.items = $scope.load();
};
