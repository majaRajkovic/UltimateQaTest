const AutomationPractice = require("../../pages/automationPractice.page");
const MainComponent = require("../../components/main.menu.component");
const MainPage = require("../../pages/main.page");
const Data = require("../../data/data");
const SeleniumExc = require("../../pages/seleniumExc.page");
const BigPage = require("../../pages/bigPage.page");
const ElementInteraction = require("../../pages/interactionwithelements.page");


describe('Test automation exercise page', function () {


    it('Random selection', function (){

        MainPage.openMainPage();
        MainComponent.clickOnAutomationExercises();
        ElementInteraction.clickOnInteractionsWithElements().
            clickOnMaleButton().
            clickOnCheckBoxButton().
            clickOnCar();


    })

});