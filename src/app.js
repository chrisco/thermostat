var thermostat = new Thermostat();

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
    $("#current_temp").css('color', thermostat.getColor());
}

$(document).ready(function () {
    updateDisplay();
    $('#increase').click(function(){
        thermostat.increaseTemp(1);
        updateDisplay();

    });
$(document).ready(function(){
    updateDisplay();
    $('#decrease').click(function(){
        thermostat.decreaseTemp(1);
        updateDisplay();
    });


});

});
