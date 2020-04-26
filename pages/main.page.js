
class MainPage {

    get add_to_cart() {return $("//*[@id='add_to_cart']")}

    get add_to_cart_verification() {return $("//*[@id='layer_cart']/div[1]/div[1]/h2/i")}

//////////////////////////////////////////////////////

    openMainPage() {
        browser.url('/');
        browser.maximizeWindow();

        this.logoIcon.waitForDisplayed();

        return this;      

    }

    clickAddToCart() {

        this.add_to_cart.waitForDisplayed();

        this.add_to_cart.moveTo();

        this.add_to_cart.click();

        this.add_to_cart_verification.waitForDisplayed();

        return this;

    }
 
}


module.exports = new MainPage();
