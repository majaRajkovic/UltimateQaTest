const BigPage = require("../pages/bigPage.page");



class MainMenuComponent {


    get click_on_courses() { return $("(//a[@href='https://ultimateqa.com/video-tutorials/'])[1]") };

    get click_on_courses_verification() { return $("//h1[@class='section__heading section__heading-ornament section__heading-ornament___8f695']") };

    get automationExercises() { return $("(//li[@id='menu-item-587'])[1]") };

    get click_on_selenium_resources() {return $ ("(//li[@id='menu-item-6838'])[1]")};

    get click_on_selenium_resources_verification() {return $ ("//h1[@class='entry-title']")};

    get insert_text_in_search() {return $("//input[@type='text']")};

    get click_on_search_button() {return $("//input[@id='searchsubmit']")};

    get click_on_search_button_verification() {return $("//div[@id='top-posts-2']")}

    ///////////////////////////////////////////////////////////////////////////


    clickOnAutomationExercises() {

        this.automationExercises.waitForDisplayed();

        this.automationExercises.click();

        expect(BigPage.click_on_big_page).toBeVisible();

        return this;


    }

    clickOnCourses() {

        this.click_on_courses.waitForDisplayed();

        this.click_on_courses.click();

        this.click_on_courses_verification.waitForDisplayed();

        return this;

    }


    clickOnSeleniumResources() {

        this.click_on_selenium_resources.waitForDisplayed();

        this.click_on_selenium_resources.click();

        this.click_on_selenium_resources_verification.waitForDisplayed();

        return this;


    }
    enterTextInSearch(pero) {

        
        this.insert_text_in_search.waitForDisplayed();

        this.insert_text_in_search.click();

        this.insert_text_in_search.setValue(pero);

        var newSearch = this.insert_text_in_search.getValue();

        expect(pero).toMatch(newSearch);

        return this;
    }

    clickOnSearchButton() {

        this.click_on_search_button.waitForDisplayed();

        this.click_on_search_button.click();

        this.click_on_search_button_verification.waitForDisplayed();

        return this;

    }

}

module.exports = new MainMenuComponent();