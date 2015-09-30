function CityWeather() {
    this.cityTemp = "Change the city on index.html and see what happens";
}

// This returns the object we want (try it in console):
CityWeather.prototype.getWeatherData3 = function () {
    var selected = $('#current_city').find(":selected").val();
    var response;
    // I added the return statement, but might not want or need it and/or it might be source of problem:
    return $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + selected + "&units=metric", function (json) {
        response = json;
    });
};

CityWeather.prototype.setTemp = function () {
    this.cityTemp = 999; // This works
    //this.cityTemp = getWeatherData3(); // This has problems
};

//// This is sample code from http://www.wunderground.com/weather/api/d/docs?d=resources/code-samples
//// Not using it for anything at the moment.
//// MYAPIKEY is missing from here because I don't want to post it on Github.
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
//<script>
//    jQuery(document).ready(function ($) {
//        $.ajax({
//            url: "http://api.wunderground.com/api/MYAPIKEY/geolookup/conditions/q/SE/Stockholm.json",
//            dataType: "jsonp",
//            success: function (parsed_json) {
//                var location = parsed_json['location']['city'];
//                var temp_f = parsed_json['current_observation']['temp_f'];
//                alert("Current temperature in " + location + " is: " + temp_f);
//            }
//        });
//    });
//</script>
