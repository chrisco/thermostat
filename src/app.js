var thermostat = new Thermostat();
//var weatherData;

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
    $("#current_temp").css('color', thermostat.getColor());
    //$('#city_temp').html(api_response.main.temp);
}

//var api_response;

function getWeatherData(location) {

    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location + "&units=metric", function (j) {
        api_response = j;
    });
}

$(document).ready(function () {
    var api_response;
    updateDisplay();
    $('#increase').click(function () {
        thermostat.increaseTemp(1);
        updateDisplay();
    });

    $('#power_saving_mode').on('change', function () {
        thermostat.togglePowerSavingMode();
        updateDisplay();
    });

    $('#decrease').click(function () {
        thermostat.decreaseTemp(1);
        updateDisplay();
    });

    $('#reset').click(function () {
        $('#power_saving_mode').prop('checked', true);
        thermostat.reset();
        updateDisplay();
    });

    // THIS WORKS TO CHANGE THE UI:
    $('#current_city').change(function () {
        //debugger;
        //var api_response;
        getWeatherData($("#current_city").val());
        $('#city_temp').html(api_response.main.temp);
        //updateDisplay();
    });


});
