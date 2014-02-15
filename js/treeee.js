var Node = function(content) {
    this.branches = [];
    if (content) {
        this.content = content;
    }
};

Node.prototype.append = function(node) {
    this.branches.push(node);
};


var TreeCtrl = function($scope) {
    $scope.tree = new Node();
    $scope.newContent = "";

    $scope.appendNode = function(ev) {
        // return if event is not Enter key
        if (ev.which != 13) {
            return;
        }

        // app new content to tree
        $scope.tree.append(new Node($scope.newContent));

        // reset new content string
        $scope.newContent = "";
    };
};
