function Thermostat () {
    this.currentTemp = 20;
    this.minimumTemp = 10;
    this.mode = true;
}

Thermostat.prototype.increaseTemp = function() {
    if(this.currentTemp < this.getMaxTemp()) {
        this.currentTemp = this.currentTemp + 1;
    } else {
        this.currentTemp = this.getMaxTemp()
    }

};

Thermostat.prototype.decreaseTemp = function() {
    if(this.currentTemp > this.minimumTemp) {
        this.currentTemp = this.currentTemp - 1;
    } else {
        this.currentTemp = 10;
        //throw new Error("Ajja Bajja!");
    }
};

Thermostat.prototype.getMaxTemp = function() {
    if(this.mode) {
        return 25;
    } else {
        return 32;
    }
};

Thermostat.prototype.reset= function(){
    this.mode = true;
    this.currentTemp = 20;
};
