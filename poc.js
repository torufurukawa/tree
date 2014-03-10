function Node(data) {
    this.data = data;

    // TODO: firstChild
    // TODO: nextSibling
    // TODO: previousSibling
    // TODO: parent

    this.toString = function() {
        var text = '{data:"'+this.data+'"}';
        return text;
    }
}

// TODO: new を使わないコンストラクタ
var root = new Node("root");

print(root.toString());
