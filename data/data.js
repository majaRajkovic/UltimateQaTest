const faker = require('faker');

class Data {

    // Sets locale to different languages 
    faker = faker.locale = "de_AT";

    email = faker.internet.email();

    name = faker.name.firstName();

    txt = faker.random.words(); 

    result = "13";








}

module.exports = new Data();