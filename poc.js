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
        // 子ノードがなければ node を設定
        if (!this.firstChild) {
            this.firstChild = node;
        }

        // 既存の最後の子ノードから連結
        if (this.lastChild) {
            this.lastChild.nextSibling = node;
        }

        this.lastChild = node;
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
root.append(new Node("wbs"));
var tasks = new Node("tasks");
root.append(tasks);
root.append(new Node("update"));
tasks.append(new Node("A"));
tasks.append(new Node("B"));
tasks.append(new Node("C"));
tasks.append(new Node("D"));



print(root.toString());
