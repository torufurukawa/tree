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
    // TODO: convert tree into object
    var obj = [];

    // stringify
    var data = angular.fromJson(obj);
    console.log(data);

    // TODO: save in localstorage
  };

};


var ValueCtrl = function($scope) {
  $scope.isBeingEdited = false;

  $scope.startEditing = function() {
    $scope.isBeingEdited = true;
  };

  $scope.finishEditing = function() {
    $scope.isBeingEdited = false;
  };

  // TODO: items に変更があったら save が呼び出されるようにする
};
