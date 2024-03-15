import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
describe('User login Test', () => {
    
    const homePage = new HomePage
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    });
    it.only('Register user with existing email', () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        cy.getBySel(LOCATORS.HOME_PAGE.LOGIN_BTN).click()
        cy.getByDataQa(LOCATORS.LOGIN_PAGE.SIGNUP_NAME).type(user.singUpWithExistingEmail.userName);
        cy.getByDataQa(LOCATORS.LOGIN_PAGE.SIGNUP_EMAIL).type(user.singUpWithExistingEmail.email);
        cy.getByDataQa(LOCATORS.LOGIN_PAGE.SIGNUP_BTN).click();
        cy.contains(user.singUpWithExistingEmail.errorMessage).should('be.visible')
    });
});


