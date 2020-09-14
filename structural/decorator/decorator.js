const Log = require('../../log')

const User = function (name) {
    this.name = name;

    this.say = () => {
        Log.add(`Usuário: ${this.name}`);
    }
}

const DecoratedUser = function (user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = () => {
        Log.add(`Usuário com Decorator: ${this.name}, ${this.street}, ${this.city}`);
    }
}

module.exports = { User, DecoratedUser }