const Log = require('../../log')

function GeoCoder() {
    this.getLatLng = (address) => {
        const latLng = {
            "Amsterdam": "52.3700° N, 4.8900° E",
            "London": "51.5171° N, 0.1062° W",
            "Paris": "48.8742° N, 2.3470° E",
            "Berlin": "52.5233° N, 13.4127° E"
        }

        //Object Literal ECM6
        return latLng[address] || null;
    }
}

function GeoProxy() {

    const geoCoder = new GeoCoder();
    const geoCache = {};

    return {
        getLatLng: (address) => {
            if (!geoCache[address]) {
                geoCache[address] = geoCoder.getLatLng(address);
            }

            Log.add(`${address}: ${geoCache[address]}`);

            return geoCache[address];
        },

        getCount: () => {
            let count = 0;
            for (let code in geoCache) { count++ }
            return count;
        }
    }
}

module.exports = GeoProxy;