function Thermostat () {
    this.currentTemp = 20;
    this.minimumTemp = 10;
    this.powerSavingMode = true;
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
    if(this.powerSavingMode) {
        return 25;
    } else {
        return 32;
    }
};

Thermostat.prototype.reset = function() {
    this.powerSavingMode = true;
    this.currentTemp = 20;
};

Thermostat.prototype.getColor = function() {
    if(this.currentTemp < 18) {
        return "green";
    } else if (this.currentTemp < 25) {
        return "yellow";
    } else {
        return "red";
    }
};
