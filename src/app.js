var thermostat = new Thermostat();
//var weatherData;

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
    $("#current_temp").css('color', thermostat.getColor());
}

function getWeather(location, callback) {
    var api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric';
    $.ajax({
        dataType: "jsonp",
        url: api_url,
        success: callback
    });
}

function getWeatherForSelectedCity(location) {
    getWeather(location, function (response) {
        $('#city_temp').html(response.main.temp);
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
        getWeatherForSelectedCity($("#current_city").val());
        updateDisplay();
    });


});
