
class MainPage {

    get logo_Icon() {return $("//img[@id='logo']")}

    get click_on_courses() {return $("(//a[@href='https://ultimateqa.com/video-tutorials/'])[1]")}

    get click_on_courses_verification() {return $("//h1[@class='section__heading section__heading-ornament section__heading-ornament___8f695']")}

//////////////////////////////////////////////////////

    openMainPage() {
        browser.url('/');
        browser.maximizeWindow();

        this.logo_Icon.waitForDisplayed();

        return this;      

    }

    clickOnCourses() {

        this.click_on_courses.waitForDisplayed();

        this.click_on_courses.moveTo();

        this.click_on_courses.click();

        this.click_on_courses_verification.waitForDisplayed();

        return this;

    }

    
 
}


module.exports = new MainPage();
