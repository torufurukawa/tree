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
      var value = {content:$scope.newContent};
      var item = new TreeElement(value);
      $scope.items.append(item);
      $scope.newContent = '';
      $scope.notify();
    }
  };

  $scope.removeItem = function(item) {
    item.remove();
    $scope.notify();
  };

  $scope.indent = function(item) {
  };

  $scope.dedent = function(item) {
  };

  $scope.save = function() {
    var obj = $scope.elementTreeToObject($scope.items);
    var text = angular.toJson(obj);
    window.localStorage.setItem('tree', text);
  };

  $scope.load = function() {
    var text = window.localStorage.getItem('tree');

    // localStorage に保存されていなければ何もしない
    if (!text) {
      return;
    }

    var obj = angular.fromJson(text);
    var tree = $scope.objectToTreeElement(obj);
    $scope.items = tree;
  };

  /**
   * Notify change from child controllers.
   * This function is to be called by child controllers when changes occurs.
   */
  $scope.notify = function() {
    $scope.save();
  };


  /**
   * Convert tree element into an object
   */
  $scope.elementTreeToObject = function(element) {
    var children = [];
    angular.forEach(element.children, function(child, i) {
      children.push($scope.elementTreeToObject(child));
    });
    return {'value': element.value, 'children': children};
  };

  /**
   * Convert object into a tree element
   */
  $scope.objectToTreeElement = function(obj) {
    var element = new TreeElement(obj.value);
    angular.forEach(obj.children, function(child, i) {
      element.append($scope.objectToTreeElement(child));
    });
    return element;
  }

  $scope.initialize = function() {
    $scope.load();
  }

};


var ValueCtrl = function($scope) {
  $scope.isBeingEdited = false;

  $scope.startEditing = function() {
    $scope.isBeingEdited = true;
  };

  $scope.finishEditing = function() {
    $scope.isBeingEdited = false;
    $scope.$parent.notify();
  };
};
