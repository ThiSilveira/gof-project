const Log = require('../../log')

const Gestures = function (output) {
    this.output = output;

    this.tap = () => { this.output.click(); }
    this.swipe = () => { this.output.move(); }
    this.pan = () => { this.output.drag(); }
    this.pinch = () => { this.output.zoom(); }
};

const Mouse = function (output) {
    this.output = output;

    this.click = () => { this.output.click(); }
    this.move = () => { this.output.move(); }
    this.down = () => { this.output.drag(); }
    this.wheel = () => { this.output.zoom(); }
};

// output devices

const Screen = function () {
    this.click = () => { Log.add("Screen select"); }
    this.move = () => { Log.add("Screen move"); }
    this.drag = () => { Log.add("Screen drag"); }
    this.zoom = () => { Log.add("Screen zoom in"); }
};

const Audio = function () {
    this.click = () => { Log.add("Sound oink"); }
    this.move = () => { Log.add("Sound waves"); }
    this.drag = () => { Log.add("Sound screetch"); }
    this.zoom = () => { Log.add("Sound volume up"); }
};

module.exports = { Gestures, Mouse, Screen, Audio }


