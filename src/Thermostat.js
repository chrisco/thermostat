function Thermostat () {
    this.currentTemp = 20;
    this.minimumTemp = 10;
    this.mode = true;

}

Thermostat.prototype.increaseTemp = function() {
    this.currentTemp = this.currentTemp + 1;
};

Thermostat.prototype.decreaseTemp = function() {
    if(this.currentTemp > this.minimumTemp) {
        this.currentTemp = this.currentTemp - 1;
    } else {
        this.currentTemp = 10;
        //throw new Error("Ajja Bajja!");
    }
};
