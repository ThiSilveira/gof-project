//The Adapter pattern translates one interface (an object's properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.
const Log = require('../../log');
const { Shipping, ShippingAdapter } = require('./adapter');

init();

function init() {
    const shipping = new Shipping();
    const credentials = { token: "30a8-6ee1" };
    const adapter = new ShippingAdapter(credentials);

    // original shipping object and interce

    let cost = shipping.request("78701", "10010", "2 lbs");
    Log.add("Valor antigo: " + cost);

    // new shipping object with adapted interce

    cost = adapter.request("78701", "10010", "2 lbs");
    Log.add("Valor novo: " + cost);

    Log.show();
}