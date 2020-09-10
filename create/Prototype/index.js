//The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object. The Prototype pattern is also referred to as the Properties pattern.

const { Customer, CustomerPrototype } = require('./customerPrototype')

init();

function init() {
    const proto = new Customer('Thiago', 'Silveira', 'pendente');
    const prototype = new CustomerPrototype(proto);
    const customer = prototype.clone();

    //Pode ser utilizado apenas o Object.assing()
    // const customer2 = Object.assign(proto)
    
    //Ou spread do ES6 para clonar apenas os valores
    // const customer3 = { ...proto };

    customer.say();
}