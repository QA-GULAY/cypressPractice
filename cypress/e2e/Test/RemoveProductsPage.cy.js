import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
describe('Remove Products From Cart', () => {
    
    const homePage = new HomePage
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
 it('The user should be able to remove any product from the cart.', () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should('be.visible')
        cy.contains(user.paymentPage.product).trigger('mouseover')
        cy.getBySel(LOCATORS.PAYMENT_PAGE.ADD_TO_CARD_BTN).click({force: true})
        cy.getBySel(LOCATORS.REMOVE_PRODUCT_PAGE.CONTINUE_SHOPPING).click()
        cy.getBySel(LOCATORS.HOME_PAGE.CARD_BTN).click()
        cy.getBySel(LOCATORS.REMOVE_PRODUCT_PAGE.X_BUTTON).click()
        cy.contains(user.assertion.assertionText).should('be.visible')
    });
});
