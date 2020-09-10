//The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

const Singleton = require('./singleton')

init();

function init() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}