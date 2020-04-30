const BigPage = require("../pages/bigPage.page");
const MainComponent = require("../components/main.menu.component");
const MainPage = require("../pages/main.page");
const Data = require("../data/data");
const faker = require('faker');


describe('Test automation exercise page', function () {

    it('Prvi test', function () {


        MainPage.openMainPage();

        MainComponent.clickOnAutomationExercises().
        clickOnSeleniumResources().
        enterTextInSearch(Data.search).
        clickOnSearchButton();
       
    

       BigPage.clickOnBigPageWithElements().
            enterName(Data.name).
            enterEmailAddress(Data.email).
            enterTxtToMsgBox(Data.txt);
            
            

    });

    it('Drugi test', function(){

        MainComponent.clickOnAutomationExercises();

        BigPage.clickOnBigPageWithElements().enterResult(Data.result);
        
    });


});