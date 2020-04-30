const AutomationPractice = require("../../pages/automationPractice.page");
const MainComponent = require("../../components/main.menu.component");
const MainPage = require("../../pages/main.page");
const Data = require("../../data/data");
const SeleniumExc = require("../../pages/seleniumExc.page");
const BigPage = require("../../pages/bigPage.page");


describe('Test automation exercise page', function () {

    it('Prvi test', function () {

        MainPage.openMainPage();

        MainComponent.clickOnSeleniumResources().
            enterTextInSearch(Data.search).
            clickOnSearchButton().
            enterEmailSubscription(Data.email).
            clickOnSubscriptionButton();

        MainComponent.clickOnAutomationExercises();

        AutomationPractice.clickOnBigPageWithElements().
            enterName(Data.name).
            enterEmailAddress(Data.email).
            enterTxtToMsgBox(Data.txt);
    });

    it('Drugi test', function () {

        MainComponent.clickOnAutomationExercises();

        AutomationPractice.clickOnBigPageWithElements();
        
        BigPage.enterResult(Data.result);

    });

});