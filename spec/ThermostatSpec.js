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
    });
});
