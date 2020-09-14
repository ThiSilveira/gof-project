//The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.
const Log = require('../../log');
const { Composite, traverse } = require('./composite');

init();

function init() {
    const tree = new Composite("Raiz");
    const left = new Composite("Esquerda");
    const right = new Composite("Direita");
    const leftleft = new Composite("EsquerdaEsquerda");
    const leftright = new Composite("EsquerdaDireita");
    const rightleft = new Composite("DireitaEsquerda");
    const rightright = new Composite("DireitaDireita");

    tree.add(left);
    tree.add(right);
    tree.remove(right); //note: remove
    tree.add(right)

    left.add(leftleft);
    left.add(rightright);

    traverse(1, tree);

    Log.show();
}

