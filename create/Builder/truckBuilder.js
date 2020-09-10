const Log = require('./log')

function TruckBuilder() {
    this.truck = null;

    this.step1 = () => {
        this.truck = new Truck();
    }

    this.step2 = () => {
        this.truck.addParts();
    }

    this.get = () => {
        return this.truck;
    }
}

function Truck() {
    this.doors = 0

    this.addParts = () => {
        this.doors = 2;
    }

    this.say = () => {
        Log.add(`Este carro tem ${this.doors} portas`)
    }
}

module.exports = TruckBuilder;