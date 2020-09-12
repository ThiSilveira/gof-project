//The Proxy pattern provides a surrogate or placeholder object for another object and controls access to this other object.
const Log = require('../../log');
const GeoProxy = require('./proxy');

init();

function init() {
    const geo = new GeoProxy();

    // geolocation requests
    geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");

    Log.add("\nCache size: " + geo.getCount());
    Log.show();
}
