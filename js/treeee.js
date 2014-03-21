// Application module

var app = angular.module('app', ['ui.keypress', 'ui.sortable']);


// Controllers

var TreeCtrl = function($scope) {
  $scope.items = new TreeElement(null);
  $scope.newContent = '';

  $scope.addItem = function() {
    if ($scope.newContent) {
      var value = {content:$scope.newContent};
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
    console.log($scope.items);
    // TODO: convert tree into object
    var obj = [];

    // stringify
    var data = angular.fromJson(obj);
    console.log(data);

    // TODO: save in localstorage
  };

  /**
   * Notify change from child controllers.
   * This function is to be called by child controllers when changes occurs.
   */
  $scope.notify = function() {
    $scope.save();
  };

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
