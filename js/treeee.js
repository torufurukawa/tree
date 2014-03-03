// Application module

var app = angular.module('app', ['ui.keypress', 'ui.sortable']);


// Controller

var TreeCtrl = function($scope) {
  $scope.items = [];
  $scope.newContent = '';
  $scope.activeNode = -1;

  $scope.addItem = function() {
    if ($scope.newContent) {
      var item = {content:$scope.newContent, isBeingEdited:false};
      $scope.items.push(item);
      $scope.newContent = '';
    }
  };

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
    // convert into text
    var text = '';
    angular.forEach($scope.items, function(val, i) {
      text += val.content;
      if (i < $scope.items.length - 1) {
        text += '\n';
      }
    });

    // save on local storage
    window.localStorage.setItem('tree', text);
  };

  // save tree on change
  $scope.$watchCollection('items', function(newValue, oldValue) {
    $scope.save();
  });

  $scope.load = function() {
    // load from local stroage
    var text = window.localStorage.getItem('tree');

    // convert text into object
    var items = [];
    angular.forEach(text.split('\n'), function(line, i) {
      items.push({'content':line, 'isBeingEdited':false});
    });
    return items;
  };

  // Initialization
  $scope.items = $scope.load();
};
