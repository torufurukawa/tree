var Node = function(content) {
    this.branches = [];
    if (content) {
        this.content = content;
    }
};

var TreeCtrl = function($scope) {
    $scope.tree = new Node();
    $scope.tree.branches.push(new Node('hoge'));
    $scope.tree.branches.push(new Node('ひゃほい'));
};
