const MainComponent = require("../components/main.menu.component");
const BigPage = require("./automationPractice.page");
const Data = require("../data/data");

function getRandomNumber(n) {
    return Math.floor(n * Math.random()) + 1;
}

class ElementInteraction {

    get logo_Icon() { return $("//img[@id='logo']") }

    get click_interactions_with_elements() {return $("//a[contains(text(), 'Interactions with simple elements')]")};

    get click_interactions_with_elements_verification() {return $("(//div[@class='et_pb_text_inner'])[1]")};

    get click_on_male_button() {return $("(//input[@type='radio'])[" + Data.getRandomNumber(3) + "]")};

 /////////////////////

    clickOnInteractionsWithElements() {

        this.click_interactions_with_elements.waitForDisplayed();

        this.click_interactions_with_elements.click();

        this.click_interactions_with_elements_verification.waitForDisplayed();

        return this;

    }

    clickOnMaleButton() {

        this.click_on_male_button.waitForDisplayed();

        this.click_on_male_button.click();

        browser.pause(3000);

        return this;


    }
}


module.exports = new ElementInteraction();