const Log = require('./log')

function Factory() {
    this.createEmployee = function (type) {
        
        const objects = {
            fulltime: FullTime,
            parttime: PartTime,
            temporary: Temporary,
            contractor: Contractor
        };
        
        //Object Literal ECM6
        let employee = new (objects[type] || null);

        employee.type = type;

        employee.say = function () {
            Log.add(`${this.type}: Taxa de ${this.hourly}/hora`)
            // Log.add(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

var FullTime = function () {
    this.hourly = "R$ 12,00";
};

var PartTime = function () {
    this.hourly = "R$ 11,00";
};

var Temporary = function () {
    this.hourly = "R$ 10,00";
};

var Contractor = function () {
    this.hourly = "R$ 15,00";
};

module.exports = Factory