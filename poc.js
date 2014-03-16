// TreeElement クラス定義

function TreeElement(obj) {
    this.value = obj;
    this.parent = null;
    this.children = new Array();

    this.append = function(element) {
        element.parent = this;
        this.children.push(element);
    };

    this.prepend = function(element) {
        element.parent = this;
        this.children.unshift(element);
    }

    this.remove = function() {
        // 親ノードが自分を参照していなければエラー
        var index = this.parent.children.indexOf(this);
        if (index==-1) {
            throw "Unexpeced Error: element does not belong to parent";
        }

        // 親ノードから自分を削除
        this.parent.children.splice(index, 1);

        // 親ノードへの参照を削除
        this.parent = null;
    };

    this.insertAfter = function(element) {
        // index を特定する
        var index = element.parent.children.indexOf(element);

        // 挿入する
        element.parent.children.splice(index+1, 0, this);

        // 親を参照する
        this.parent = element.parent;
    };

    this.insertBefore = function(element) {
        // index を特定する
        var index = element.parent.children.indexOf(element);

        // 挿入する
        element.parent.children.splice(index, 0, this);

        // 親を参照する
        this.parent = element.parent;
    };
}


// テスト

var root = new TreeElement("root");

var tasks = new TreeElement("tasks");
var wbs = new TreeElement("wbs");
root.append(new TreeElement("goal"));
root.append(wbs);
root.append(tasks);
root.append(new TreeElement("update"));

var A = new TreeElement("A");
var B = new TreeElement("B");
var C = new TreeElement("C");
var D = new TreeElement("D");
var E = new TreeElement("E");
tasks.append(A);
tasks.append(B);
tasks.append(C);
tasks.append(D);
tasks.append(E);

var X = new TreeElement("X");
wbs.append(X)


// C を削除
C.remove();

// A を B の後ろへ移動
A.remove();
A.insertAfter(B);

// D を B の前へ移動
D.remove();
D.insertBefore(B);

// E を wbs の先頭へ移動
E.remove();
wbs.prepend(E);

// 表示

function render(element, depth) {
    if (!depth) {
        depth = 0;
    }
    var indent = "";
    for (var i=0; i<depth; i++) {
        indent += "  ";
    }

    // 自分自身をレンダ
    text = indent + element.value + "\n";

    // 子ノードをレンダ
    for (var i=0; i<element.children.length; i++) {
        text += render(element.children[i], depth+1);
    }

    return text;
}


print(render(root));

// - root
//   - goal
//   - wbs
//     - E
//     - X
//   - tasks
//     - (C)
//     - D
//     - B
//     - A
//   - update
