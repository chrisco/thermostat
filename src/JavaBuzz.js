function JavaBuzz () {
}

JavaBuzz.prototype.play = function(number) {
  if (number % 15 === 0) {
    return "JavaBuzz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }
  if (number % 3 === 0) {
    return "Java";
  }
  return number;
};

JavaBuzz.prototype.playTo = function(number) {
  for (var i = 1; i <= number; i++) {
    console.log(game.play(i));
  }
};

var game = new JavaBuzz();
console.log(game.playTo(15));
