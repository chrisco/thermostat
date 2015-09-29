function Thermostat () {
    this.currentTemp = 20;
}

Thermostat.prototype.increaseTemp = function() {
    this.currentTemp = this.currentTemp + 1;
};
