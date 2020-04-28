const MainComponent = require("../components/main.menu.component");



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
