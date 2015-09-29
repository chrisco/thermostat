describe('ThermostatUI', function() {

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    it('contains the correct temperature text', function () {
        expect('#current_temp').toContainText('20');
    });

    it('temperature increases with one degree when clicking once on the up button', function(){
       $("#increase").click();
        expect('#current_temp').toContainText('21');
    });

    it('temperature decreases with one degree when clicking once on the down button', function(){
        $("#decrease").click();
        expect('#current_temp').toContainText('19');
    });

});
