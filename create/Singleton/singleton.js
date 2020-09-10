const Singleton = (function() {
    let instance;

    function createInstance() {
        return new Object("I am the instance");
    }

    return {
        getInstance: () => {
            if(!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})();

module.exports = Singleton;