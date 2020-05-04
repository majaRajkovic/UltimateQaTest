class Base{

  // Takes in number n and returns a random number from range 1..n
  getRandomNumber = function(n) {
    return Math.floor(n * Math.random()) + 1;
}




}

module.exports = new Base();