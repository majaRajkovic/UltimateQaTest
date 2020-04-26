const MainPage = require("../pages/main.page");
// const MainMenuComponent = require("../pages/components/main.menu.component");


describe('Test main page', function () {

    it('Test prve stranice', function () {

        MainPage.openMainPage().clickAddToCart();

    });

});

