const BigPage = require("../pages/bigPage.page");



class MainMenuComponent {


    get click_on_courses() { return $("(//a[@href='https://ultimateqa.com/video-tutorials/'])[1]") };

    get click_on_courses_verification() { return $("//h1[@class='section__heading section__heading-ornament section__heading-ornament___8f695']") };

    get automationExercises() { return $("(//li[@id='menu-item-587'])[1]") };

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


}

module.exports = new MainMenuComponent();