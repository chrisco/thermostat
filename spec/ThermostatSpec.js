describe("Thermostat", function(){
   var thermostat;

    beforeEach(function(){
       thermostat = new Thermostat();
    });

    describe("Thermostat Temperature", function(){
        it("Thermostat starts at 20 degrees", function(){
           expect(thermostat.currentTemp).toEqual(20);
        });

        it("calling the increaseTemp method increases the current temp by 1 degree", function(){
            thermostat.increaseTemp();
            expect(thermostat.currentTemp).toEqual(21);
        });

        it("calling the decreaseTemp method decreases the current temp by 1 degree", function (){
            thermostat.decreaseTemp();
            expect(thermostat.currentTemp).toEqual(19);
        });

        it("minimum temperature is 10 degrees", function(){
            expect(thermostat.minimumTemp).toEqual(10);
        });

        it("temperature cant go below 10 degrees", function(){
            thermostat.currentTemp = 10;
            thermostat.decreaseTemp();
            expect(thermostat.currentTemp).toEqual(10);
        });

        it("power saving mode is set to true", function(){
            expect(thermostat.mode).toEqual(true);
        });

    });
});
