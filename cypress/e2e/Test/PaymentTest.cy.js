import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import PaymentPage from "../Page/PaymentPage";
import CheckoutPage from "../Page/CheckoutPage";
describe('Payment Test', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const paymentPage = new PaymentPage
    const checkoutPage = new CheckoutPage

    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it('The user should be able to place orders and make payments after registering on the site.', () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getBySel(LOCATORS.LOGIN_PAGE.LOGIN_ACCOUNT_TEXT).should('have.text', user.userLoginPage.loginAccountText)
        loginPage.userLogin(user)
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
        cy.contains(user.paymentPage.product).trigger('mouseover')
        cy.getBySel(LOCATORS.PAYMENT_PAGE.ADD_TO_CARD_BTN).click({ force: true })
        cy.getBySel(LOCATORS.ADD_TO_CARD.COUNTINUE_SHOPPING).click()
        cy.getBySel(LOCATORS.HOME_PAGE.CARD_BTN).click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.PROCEED_TO_CHECKOUT_BTN).should('be.visible')
        paymentPage.clickProceedToCheckoutBtn()
        cy.contains(user.paymentPage.addressDetails).should('be.visible')
        cy.contains(user.paymentPage.reviewYourOrder).should('be.visible')
        paymentPage.descriptionComment(user)
        checkoutPage.clickToPlaceOrderBtn()
        paymentPage.enterPaymentDetails(user.userInfo.userName, '12345678913','123', '05', '2023')
        paymentPage.clickPayAndConfirmBtn()
        cy.contains(user.paymentPage.confirmText).should('be.visible')

    });
}); 
