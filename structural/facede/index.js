//The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. It is a simple pattern that may seem trivial but it is powerful and extremely useful. It is often present in systems that are built around a multi-layer architecture.
const Log = require('../../log');
const Mortgage = require('./facede');

init();

function init() {
    const mortgage = new Mortgage('Joan Templeton');
    const result = mortgage.applyFor("100.000,00");

    Log.add(result);
    Log.show();
}