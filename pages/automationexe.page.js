class AutomationPage {

    get logo_Icon() {return $("//img[@id='logo']")}

    get logo_Icon_verification() {return $("//div[@id='et-top-navigation']")}

    get click_on_big_page() {return $("//a[text()='Big page with many elements']")}

    get click_on_big_page_verification() {return $("//span[@id='Skills_Improved']")}

    get click_on_name_button() {return $("//input[@id='et_pb_contact_name_0']")}

    get click_on_email_button() {return $("//input[@id='et_pb_contact_email_0']")}

    get click_on_msg_box() {return $("//textarea[@id='et_pb_contact_message_0']")}

    get click_result_box() {return $("//input[@class='input et_pb_contact_captcha' and @name='et_pb_contact_captcha_0']")}

    get click_on_submit() {return $("//button[contains(text(), 'Submit')][1]")}


/////////////////////

    openAutomationPage() {
        browser.url('https://ultimateqa.com/automation/');
        browser.maximizeWindow();

        this.logo_Icon.waitForDisplayed();

        //this.logo_Icon_verification.waitForDisplayed();

        return this; 
    
    }


    clickOnBigPageWithElements() {

        this.click_on_big_page.waitForDisplayed();

        this.click_on_big_page.moveTo();

        this.click_on_big_page.click();

        this.click_on_big_page_verification.waitForDisplayed();
        
        return this;

    }

    enterNameAndEmailAddress() {

        this.click_on_name_button.waitForDisplayed();

        this.click_on_name_button.moveTo();

        this.click_on_name_button.click();

        browser.sendKeys(['Maja']);

        browser.pause(2000);

        this.click_on_email_button.click();

        browser.sendKeys(['maja@maja.com']);

        browser.pause(3000);

        return this;



    }

    moveToMsgBox() {

        this.click_on_msg_box.moveTo();

        this.click_on_msg_box.click();

        browser.sendKeys(['Maja', 'Ne uci'])

        this.click_result_box.click();

        browser.pause(2000);

        browser.sendKeys(['13']);

        browser.pause(3000);

        this.click_on_submit.click();

        return this;


    }

}
module.exports = new AutomationPage();