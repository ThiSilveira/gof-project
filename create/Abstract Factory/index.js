//An Abstract Factory creates objects that are related by a common theme. In object-oriented programming a Factory is an object that creates other objects. An Abstract Factory has abstracted out a theme which is shared by the newly created objects.

const { EmployeeFactory, VendorFactory } = require('./factory');
const Log = require('../../log');

init();

function init() {

    let persons = [];
    const employee = new EmployeeFactory();
    const vendor = new VendorFactory();

    persons.push(employee.create("João"));
    persons.push(vendor.create("Marcelo"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

    Log.show();
}