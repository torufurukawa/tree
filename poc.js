// TODOs
// 要素の追加
// 要素の削除
// 要素間の移動
// トラバース

// メソッドリスト
// add(element)
// addElements(elelements)
// addPrependChild(element)
// clone()
// copyTo(element)
// getEnumerator()
// insertAfter(element)
// insertBefor(element)
// moveTo(element)
// remove()
// removeAllChidlen()
// removeChild(element)


// TreeElement　クラス定義

function TreeElement(obj) {
    this.value = obj;
    this.parent = null;
    this.children = new Array();

    this.add = function(element) {
        element.parent = this;
        this.children.push(element);
    };
}


// テスト

var root = new TreeElement("root");

var tasks = new TreeElement("tasks");
root.add(new TreeElement("goal"));
root.add(new TreeElement("wbs"));
root.add(tasks);
root.add(new TreeElement("update"));

tasks.add(new TreeElement("A"));
tasks.add(new TreeElement("B"));
tasks.add(new TreeElement("C"));
tasks.add(new TreeElement("D"));
tasks.add(new TreeElement("E"));


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
//   - tasks
//     - A
//     - (C)
//     - D
//     - B
//   - update
