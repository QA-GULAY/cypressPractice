import HomePage from "../Page/HomePage";
import LOCATORS from "../../support/locators";
describe("Should subscribe successfully ", () => {
    const homePage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("The user should be able to subscribe on the card page", () => {
        homePage.visitPage()
        cy.title().should('eq', user.home.title)
        cy.getBySel(LOCATORS.CART_PAGE.CART_BTN).click()
        cy.getBySel(LOCATORS.CART_PAGE.SUBSCRITION_TEXT).scrollIntoView()
        cy.getBySel(LOCATORS.CART_PAGE.SUBSCRITION_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.CART_PAGE.EMAIL_BOX).type(user.userInfo.email)
        cy.getBySel(LOCATORS.CART_PAGE.SUBSCRITION_BTN).click()
        cy.getBySel(LOCATORS.CART_PAGE.VERIFY_TEXT).should('be.visible')
    })
})