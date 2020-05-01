const faker = require('faker');

class Data {

    // Sets locale to different languages 
    faker = faker.locale = "ja";

    email = faker.internet.email();

    name = faker.name.firstName();

    txt = faker.random.words(); 

    result = "13";

    search = "Websites to Practice Test Automation";

    // Takes in number n and returns a random number from range 1..n
    getRandomNumber = function(n) {
        return Math.floor(n * Math.random()) + 1;
    }

    // Here goes random number function 

    
  









}

module.exports = new Data();