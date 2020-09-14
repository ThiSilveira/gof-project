const Log = require('../../log');

var Composite = function (name) {
    this.children = [];
    this.name = name;
}

Composite.prototype = {
    add: function (child) {
        this.children.push(child);
    },
 
    remove: function (child) {
        var length = this.children.length;
        for (var i = 0; i < length; i++) {
            if (this.children[i] === child) {
                this.children.splice(i, 1);
                return;
            }
        }
    },
 
    getChild: function (i) {
        return this.children[i];
    },
 
    hasChildren: function () {
        return this.children.length > 0;
    }
}

//Recursively traverse a (sub)tree
function traverse(indent, composite) {
    Log.add(Array(indent++).join("--") + composite.name);

    for (let i = 0, len = composite.children.length; i < len; i++) {
        traverse(indent, composite.getChild(i));
    }
}

module.exports = { Composite, traverse }