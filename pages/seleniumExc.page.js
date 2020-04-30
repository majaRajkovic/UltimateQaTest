
   class SeleniumExc {
   
   get insert_text_in_search() {return $("//input[@type='text']")};

    get click_on_search_button() {return $("//input[@id='searchsubmit']")};

    get click_on_search_button_verification() {return $("//div[@id='top-posts-2']")}

    get get_latest_post_subscription() {return $("//input[@id='subscribe-field-blog_subscription-2']")}

    get click_on_subscription_button() {return $("//button[@type='submit']")}

    get click_on_subscription_button_verification() {return $("//div[@class='success']//p")}

//////////////////////////////////////////////////////////////////////////

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

    enterEmailSubscription(email) {

        this.get_latest_post_subscription.waitForDisplayed();

        this.get_latest_post_subscription.click();

        this.get_latest_post_subscription.setValue(email);

        var newSearch = this.get_latest_post_subscription.getValue();

        expect(email).toMatch(newSearch);

        return this;

    }
    clickOnSubscriptionButton() {

        this.click_on_subscription_button.waitForDisplayed();

        this.click_on_subscription_button.click();

        this.click_on_subscription_button_verification.waitForDisplayed();

        var message = this.click_on_subscription_button_verification.getText();

        expect(message).toContain('Success! An email was just sent to confirm your subscription.');

        return this;

    }


}

module.exports = new SeleniumExc();