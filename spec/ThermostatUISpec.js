describe('ThermostatUI', function () {

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    it('contains the correct temperature text', function () {
        expect('#current_temp').toContainText('20');
    });

    it('temperature increases with one degree when clicking once on the up button', function () {
        $("#increase").click();
        expect('#current_temp').toContainText('21');
    });

    it('temperature decreases with one degree when clicking once on the down button', function () {
        $("#decrease").click();
        expect('#current_temp').toContainText('19');
    });

    it('power saving mode is on by default', function () {
        expect($("#power_saving_mode")).toBeChecked();
    });

    it('power saving mode can be turned off', function () {
        $("#power_saving_mode").on('change', function () {
            expect($("#power_saving_mode")).not.toBeChecked();
        });
    });

    it('resets temperature and power saving mode to default values', function () {
        thermostat.currentTemp = 24;
        thermostat.powerSavingMode = false;
        $("#reset").click();
        expect(thermostat.currentTemp).toEqual(20);
        expect(thermostat.powerSavingMode).toEqual(true);
    });


});
