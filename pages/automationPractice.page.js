const Data = require("../data/data");
const BigPage = require("../pages/bigPage.page");


class AutomationPractice {

    get logo_Icon() { return $("//img[@id='logo']") }

    get click_on_big_page() { return $("//a[contains(text(), 'Big page with many elements')]") }

    get click_on_big_page_verification() { return $("//span[@id='Skills_Improved']") }

  

    /////////////////////

    clickOnBigPageWithElements() {

        this.click_on_big_page.waitForDisplayed();

        this.click_on_big_page.click();

        this.click_on_big_page_verification.waitForDisplayed();

        return BigPage;

    }



}
module.exports = new AutomationPractice();