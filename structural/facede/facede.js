const Log = require('../../log')

const Mortgage = function (name) {
    this.name = name;
}

Mortgage.prototype = {
    applyFor: function (amount) {
        let result = "aprovada";

        if (!new Bank().verify(this.name, amount)) { result = "negada" }
        if (!new Credit().get(this.name)) { result = "negada" }
        if (!new Background().check(this.name)) { result = "negada" }

        return `A hipoteca ${this.name} foi ${result} por R$ ${amount}`;
    }
}

const Bank = function () {
    this.verify = (name, amount) => {
        // complex logic...
        return true;
    }
}

const Credit = function () {
    this.get = (name) => {
        // complex logic...
        return true;
    }
}

const Background = function () {
    this.check = (name) => {
        // complex logic...
        return true;
    }
}

module.exports = Mortgage;