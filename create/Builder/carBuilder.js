const Log = require('./log')

function CarBuilder() {
    this.car = null;

    this.step1 = () => {
        this.car = new Car();
    }

    this.step2 = () => {
        this.car.addParts();
    }

    this.get = () => {
        return this.car;
    }
}

function Car() { 
    this.doors = 0;

    this.addParts = () => {
        this.doors = 4
    }

    this.say = () => {
        Log.add(`Este carro tem ${this.doors} portas`)
    }
}

module.exports = CarBuilder;