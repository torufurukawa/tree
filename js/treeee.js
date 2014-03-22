// Application module

var app = angular.module('app', ['ui.keypress', 'ui.sortable']);


// Directives

app.directive('syncFocusWith', function($timeout, $rootScope) {
  return {
    restrict: 'A',
    scope: {
      focusValue: "=syncFocusWith"
    },
    link: function($scope, $element, attrs) {
      $scope.$watch("focusValue", function(currentValue, previousValue) {
        if (currentValue === true && !previousValue) {
          $element[0].focus();
        } else if (currentValue === false && previousValue) {
          $element[0].blur();
        }
      })
    }
  }
});


// Controllers

var TreeCtrl = function($scope) {
  $scope.items = new TreeElement(null);
  $scope.newContent = '';
  $scope.latestFocus = {};

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
  };

  $scope.dedent = function(item) {
  };

  $scope.save = function() {
    // TODO: convert tree into object
    var obj = [];

    // stringify
    var data = angular.fromJson(obj);
    console.log(data);

    // TODO: save in localstorage
  };

  // TODO: items に変更があったら save が呼び出されるようにする
  $scope.$watchCollection('items', function(newValue, oldValue) {
    console.log(newValue);
  });
};


var ValueCtrl = function($scope) {
  $scope.startEditing = function(value) {
    value.isBeingEdited = true;
  };

  $scope.finishEditing = function(value) {
    value.isBeingEdited = false;
  };

  // TODO: items に変更があったら save が呼び出されるようにする
};
