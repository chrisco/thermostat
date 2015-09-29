var thermostat = new Thermostat();

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
    $("#current_temp").css('color', thermostat.getColor());
}

$(document).ready(function () {
    updateDisplay();
});
