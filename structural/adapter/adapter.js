const Log = require('../../log');

function Shipping() {
    this.request = (zipStart, zipEnd, weight) => {
        return "R$ 130,00"
    }
}

function AdvancedShipping() {
    this.login = (credentials) => { };
    this.setStart = (start) => { };
    this.setDestination = (destination) => { };
    this.calculate = (weight) => { return "120,00" }
}

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: (zipStart, zipEnd, weight) => {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    }
}

module.exports = { Shipping, ShippingAdapter }