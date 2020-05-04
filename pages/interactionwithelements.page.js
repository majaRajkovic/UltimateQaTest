const Base = require("../data/base");

class ElementInteraction {

    get logo_Icon() { return $("//img[@id='logo']") }

    get click_interactions_with_elements() {return $("//a[contains(text(), 'Interactions with simple elements')]")};

    get click_interactions_with_elements_verification() {return $("(//div[@class='et_pb_text_inner'])[1]")};

    get click_on_radio_button() {return $("(//input[@type='radio' and @name='gender'])[" + Base.getRandomNumber(3) + "]")};

    get click_on_checkbox_button() {return $("(//input[@type='checkbox' and @name='vehicle'])[" + Base.getRandomNumber(3) + "]")};

    get choose_a_car() {return $("(//select/option)[" + Base.getRandomNumber(4) + "]")};



 /////////////////////////


    clickOnInteractionsWithElements() {

        this.click_interactions_with_elements.waitForDisplayed();

        this.click_interactions_with_elements.click();

        this.click_interactions_with_elements_verification.waitForDisplayed();

        expect(this.click_interactions_with_elements_verification).toBeVisible();

        return this;

    }

    clickOnMaleButton() {

        this.click_on_radio_button.waitForDisplayed();

        this.click_on_radio_button.click();

        this.click_on_radio_button.isSelected();
        
        expect(this.click_on_radio_button).toBeChecked()

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