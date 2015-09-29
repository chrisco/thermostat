var thermostat = new Thermostat();

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
}

$(document).ready(function () {
    updateDisplay();
});
