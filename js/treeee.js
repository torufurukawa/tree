// Derectives

var app = angular.module("app", []);

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});

// Controllers

var TreeCtrl = function($scope) {
    $scope.tree = new Node();
    $scope.newContent = "";

    $scope.appendNode = function() {
        $scope.tree.append(new Node($scope.newContent));
        $scope.newContent = "";
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
