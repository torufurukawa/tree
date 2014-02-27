// Directives

var app = angular.module("app", ['ui.keypress']);

var app = angular.module("app", ['ui.keypress']).
  directive('trFocusMe', [function() {
    return function(scope, elements, attrs) {
      console.log(scope);
      console.log(attrs);
      elements[0].focus();
    };
  }]);


// Controllers

var TreeCtrl = function($scope) {
    $scope.tree = new Node();
    $scope.newContent = "";
    $scope.activeNode = -1;

    $scope.appendNode = function() {
        $scope.tree.append(new Node($scope.newContent));
        $scope.newContent = "";
    };

    $scope.startEditing = function() {
        console.log("start editing");
    };

    $scope.stopEditing = function() {
        console.log("stop editing");
        // blur
        // activate last item
    };
};


// Node class

var Node = function(content) {
    this.branches = [];
    if (content) {
        this.content = content;
    }
};

Node.prototype.append = function(node) {
    this.branches.push(node);
};
