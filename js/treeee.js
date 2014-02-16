var app = angular.module("app", ['ui.keypress']);

// Controllers

var TreeCtrl = function($scope) {
    $scope.tree = new Node();
    $scope.newContent = "";

    $scope.appendNode = function() {
        $scope.tree.append(new Node($scope.newContent));
        $scope.newContent = "";
    };

    $scope.startEditing = function() {
        console.log("start editing");
    };

    $scope.stopEditing = function() {
        console.log("stop editing");
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
