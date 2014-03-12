function indent(n) {
    var text = "";
    for (var i=0; i<n; i++) {
        text += "  ";
    }
    return text;
}


function Node(data) {
    this.data = data;

    this.firstChild = null;

    // TODO: lastChild?
    // TODO: nextSibling
    // TODO: previousSibling
    // TODO: parent

    this.toString = function(level) {
        if (!level) {
            level = 0;
        }

        var text = "";

        // 自分自身をレンダ
        text += indent(level) + this.data + "\n";

        // 子ノードをレンダ
        var node = this.firstChild;
        while (node) {
            text += node.toString(level+1)
            node = node.nextSibling;
        }

        return text;
    };

    this.append = function(node) {
        if (this.firstChild) {
            // TODO
        } else {
            this.firstChild = node;
        }
    };
}


// - root
//   - goal
//   - wbs
//   - tasks
//     - A
//     - (C)
//     - D
//     - B
//   - update


// TODO: new を使わないコンストラクタ
var root = new Node("root");
root.append(new Node("goal"));

print(root.toString());
