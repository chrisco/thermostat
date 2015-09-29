describe("Thermostat", function(){
   var thermostat;

    beforeEach(function(){
       thermostat = new Thermostat();
    });

    describe("Thermostat Temperature", function(){
        it("Thermostat starts at 20 degrees", function(){
           expect(thermostat.currentTemp).toEqual(20);
        });
    });
});
