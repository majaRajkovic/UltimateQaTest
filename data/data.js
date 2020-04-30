const faker = require('faker');

class Data {

    // Sets locale to different languages 
    faker = faker.locale = "ja";

    email = faker.internet.email();

    name = faker.name.firstName();

    txt = faker.random.words(); 

    result = "13";

    search = "Websites to Practice Test Automation";



    // Here goes random number function 

    










}

module.exports = new Data();