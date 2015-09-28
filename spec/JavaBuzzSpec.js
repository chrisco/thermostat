describe("JavaBuzz", function() {
  var game;

  beforeEach(function() {
    game = new JavaBuzz();
  });

  it("should return 'JavaBuzz' if number is divisible by 15", function() {
    game.play(15);
    expect(game.play(15)).toEqual("JavaBuzz");
  });

  it("should return 'Buzz' if number is divisible by 5", function() {
    game.play(5);
    expect(game.play(5)).toEqual("Buzz");
  });

  it("should return 'Java' if number is divisible by 3", function() {
    game.play(3);
    expect(game.play(3)).toEqual("Java");
  });

  it("should return number if number not divisible by 3, 5, or 15", function() {
    game.play(1);
    expect(game.play(1)).toEqual(1);
  });

});