import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
describe("product review automation ", () => {
    const homePage = new HomePage()

    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("Add review on product", () => {
        homePage.visitPage()
        cy.getBySel(LOCATORS.PRODUCT_PAGE.PRODUCT_BTN).click()
        cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCT).should('be.visible')
        cy.getBySel(LOCATORS.PRODUCT_PAGE.VIEW_PRODUCT_BTN).click()
        cy.getBySel(LOCATORS.PRODUCT_PAGE.REVIEW_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.PRODUCT_PAGE.NAME_BOX).type(user.userInfo.userName)
        cy.getBySel(LOCATORS.PRODUCT_PAGE.EMAIL_BOX).type(user.userInfo.email)
        cy.getBySel(LOCATORS.PRODUCT_PAGE.TEXT_AREA).type(user.reviewText.reviewMessage)
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SUBMIT_BTN).click()
        cy.getBySel(LOCATORS.PRODUCT_PAGE.VERIFYING).should('be.visible')
    })
})
