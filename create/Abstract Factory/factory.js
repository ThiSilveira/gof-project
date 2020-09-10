const Log = require('./log')

function Employee(name) {
    this.name = name;

    this.say = () => {
        Log.add(`Eu sou um funcionário: ${name}`)
    }
}

function EmployeeFactory() {
    this.create = (name) => {
        return new Employee(name);
    }
}

function Vendor(name) {
    this.name = name;

    this.say = () => {
        Log.add(`Eu sou um fornecedor: ${name}`)
    }
}

function VendorFactory(name) {
    this.create = (name) => {
        return new Vendor(name);
    }
}

module.exports = { EmployeeFactory, VendorFactory }