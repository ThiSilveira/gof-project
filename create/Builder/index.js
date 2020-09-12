const Shop = require('./shop');
const CarBuilder = require('./carBuilder');
const TruckBuilder = require('./truckBuilder');
const Log = require('../../log');

init();

function init() { 
    const shop = new Shop();
    const carBuilder = new CarBuilder();
    const truckBuilder = new TruckBuilder();

    const car = shop.construct(carBuilder);
    const truck = shop.construct(truckBuilder);

    car.say();
    truck.say();

    Log.show();
}
