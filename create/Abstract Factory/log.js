const Log = (() => {
    let log = "";

    return {
        add: (msg) => { log += `${msg}\n` },
        show: () => { console.log(log); log = "" }
    }
})();

module.exports = Log 