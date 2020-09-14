//The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.
const Log = require('../../log');
const { User, DecoratedUser } = require('./decorator');

init();

function init() {
    const user = new User("Thiago Silveira");
    user.say();

    const userDecorate = new DecoratedUser(user, "Joaquim Roseira", "São Paulo");
    userDecorate.say();

    Log.show();
}