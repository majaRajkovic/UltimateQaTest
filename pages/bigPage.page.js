const Data = require("../data/data");

class BigPage{


    get click_on_name_button() { return $("//input[@id='et_pb_contact_name_0']") };

    get click_on_email_button() { return $("//input[@id='et_pb_contact_email_0']") }

    get click_on_msg_box() { return $("//textarea[@id='et_pb_contact_message_0']") }

    get click_result_box() { return $("//input[@class='input et_pb_contact_captcha' and @name='et_pb_contact_captcha_0']") }

    get click_on_submit() { return $("//button[contains(text(), 'Submit')][1]") }


///////////////////////////////////////////////////////////////////////
    
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

        var newName = this.click_on_name_button.getValue();

        expect(name).toMatch(newName);

        return this;

    }

    enterTxtToMsgBox(txt) {

        this.click_on_msg_box.waitForDisplayed();

        this.click_on_msg_box.click();

        this.click_on_msg_box.setValue(txt);

        var txtFile = this.click_on_msg_box.getValue();

        var originalFile = Data.txt;

        expect(txtFile).toMatch(originalFile);

        return this;

    }

    enterResult(result) {

        this.click_result_box.waitForDisplayed();

        this.click_result_box.click();

        this.click_result_box.setValue(result);

        return this;


    }


    clickONSubmit() {

        this.click_on_submit.waitForDisplayed();

        this.click_on_submit.moveTo();

        this.click_on_submit.click();




    }




}

module.exports = new BigPage();
