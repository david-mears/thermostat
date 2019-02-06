describe('Thermostat', function() {

  var thermo;

  beforeEach(function() {
    thermo = new Thermostat
  });

  it('has a default temperature of 20', function() {
    expect(thermo.temp).toEqual(20)
  });
  
  describe ('#up', function() {
    it('up increases temp by 1', function() {
      temp1 = thermo.temp;
      thermo.up();
      temp2 = thermo.temp;
      expect(temp2 - temp1).toEqual(1)
    });
  });  
});
