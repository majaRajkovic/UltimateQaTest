const MainComponent = require("../components/mainMenu.component");



class MainPage {

  
  
//////////////////////////////////////////////////////

    openMainPage() {

        browser.url('/');

        browser.maximizeWindow();

        MainComponent.automationExercises.waitForDisplayed();

        expect(MainComponent.automationExercises).toBeVisible();

        return this;      

    }


 
}


module.exports = new MainPage();
