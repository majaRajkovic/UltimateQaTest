const AutomationPage = require("../pages/automationexe.page");

describe('Test automation exercise page', function (){

    it('Prvi test', function (){


        AutomationPage.openAutomationPage().
        clickOnBigPageWithElements().
        enterNameAndEmailAddress().
        moveToMsgBox();



    })

        




});