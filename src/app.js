var thermostat = new Thermostat();
var cityWeather = new CityWeather();

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
    $("#current_temp").css('color', thermostat.getColor());
    $("#city_temp").html(cityWeather.cityTemp);
}

// THIS RETURNS THE OBJECT WE WANT
// in the console, can get the temp like this:
// .responseJSON.main.temp;
function printWeather() {
    return getWeatherData();
}

// THIS DOESN'T WORK (neither do a few other variations of this I tried):
function printWeather2() {
    return getWeatherData().responseJSON.main.temp;
}

function getWeatherData() {
    var selected = $('#current_city').find(":selected").val();
    var response;
    // I added the return keyword below.  With it there, you can do this in the console:
    //$ w = getWeatherData();
    //$ w.responseJSON.main.temp;
    //$ 12.09
    return $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + selected + "&units=metric", function (json) {
        response = json;
    });
}

$(document).ready(function () {
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
        cityWeather.setTemp(); // This function doesn't work right, though (I have it hard coded).
        updateDisplay();
    });


});
