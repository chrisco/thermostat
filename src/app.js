var thermostat = new Thermostat();

function updateDisplay() {
    $("#current_temp").html(thermostat.currentTemp);
    $("#current_temp").css('color', thermostat.getColor());
}

function getWeatherData(){
    var response;
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk', function(json){
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


    });
