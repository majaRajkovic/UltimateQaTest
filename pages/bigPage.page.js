class BigPage {

    get logo_Icon() { return $("//img[@id='logo']") }

    get click_on_big_page() { return $("//a[text()='Big page with many elements']") }

    get click_on_big_page_verification() { return $("//span[@id='Skills_Improved']") }

    get click_on_name_button() { return $("//input[@id='et_pb_contact_name_0']") };

    get click_on_email_button() { return $("//input[@id='et_pb_contact_email_0']") }

    get click_on_msg_box() { return $("//textarea[@id='et_pb_contact_message_0']") }

    get click_result_box() { return $("//input[@class='input et_pb_contact_captcha' and @name='et_pb_contact_captcha_0']") }

    get click_on_submit() { return $("//button[contains(text(), 'Submit')][1]") }


    /////////////////////

    clickOnBigPageWithElements() {

        this.click_on_big_page.waitForDisplayed();

        this.click_on_big_page.click();

        this.click_on_big_page_verification.waitForDisplayed();

        return this;

    }


    enterEmailAddress(email) {

        this.click_on_email_button.waitForDisplayed();

        this.click_on_email_button.click();

        this.click_on_email_button.setValue(email);

        var email = this.click_on_email_button.getValue();

        expect(email).toMatch(email);

        return this;

    }


    enterName(name) {

        this.click_on_name_button.waitForDisplayed();

        this.click_on_name_button.click();

        this.click_on_name_button.setValue(name);

        return this;

    }

    enterTxtToMsgBox() {

        this.click_on_msg_box.waitForDisplayed();

        this.click_on_msg_box.click();

        this.click_on_msg_box.setValue(" Maja: 'Ne uci' ");

        return this;


    }

    enterResult() {

        this.click_result_box.waitForDisplayed();

        this.click_result_box.click();

        this.click_result_box.setValue('13');

        return this;


    }


    clickONSubmit() {

        this.click_on_submit.waitForDisplayed();

        this.click_on_submit.moveTo();

        this.click_on_submit.click();




    }

}
module.exports = new BigPage();