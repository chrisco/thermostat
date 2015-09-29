function Thermostat () {
    this.currentTemp = 20;
    this.minimumTemp = 10;
}

Thermostat.prototype.increaseTemp = function() {
    this.currentTemp = this.currentTemp + 1;
};

Thermostat.prototype.decreaseTemp = function() {
    this.currentTemp = this.currentTemp - 1;
};
