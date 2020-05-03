const MainComponent = require("../components/main.menu.component");
const BigPage = require("./automationPractice.page");
const Data = require("../data/data");

class ElementInteraction {

    carOrBike = Data.getRandomNumber(2);

    get logo_Icon() { return $("//img[@id='logo']") }

    get click_interactions_with_elements() {return $("//a[contains(text(), 'Interactions with simple elements')]")};

    get click_interactions_with_elements_verification() {return $("(//div[@class='et_pb_text_inner'])[1]")};

    get click_on_radio_button() {return $("(//input[@type='radio' and @name='gender'])[" + Data.getRandomNumber(3) + "]")};

    get click_on_checkbox_button() {return $("(//input[@type='checkbox' and @name='vehicle'])[" + this.carOrBike + "]")};

    get choose_a_car() {return $("(//select/option)[" + Data.getRandomNumber(4) + "]")};



 /////////////////////

    clickOnInteractionsWithElements() {

        this.click_interactions_with_elements.waitForDisplayed();

        this.click_interactions_with_elements.click();

        this.click_interactions_with_elements_verification.waitForDisplayed();

        return this;

    }

    clickOnMaleButton() {

        this.click_on_radio_button.waitForDisplayed();

        this.click_on_radio_button.click();

        browser.pause(3000);

        return this;


    }

    clickOnCheckBoxButton() {

        this.click_on_checkbox_button.waitForDisplayed();

        this.click_on_checkbox_button.click();

        browser.pause(3000);

        return this;

    }

    clickOnCar() {

        this.choose_a_car.waitForDisplayed();

        this.choose_a_car.click();

        browser.pause(2000);

        return this;

    }
}


module.exports = new ElementInteraction();