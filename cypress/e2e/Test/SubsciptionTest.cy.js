import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
describe("Subscribtion Tests", () => {
    const homePage = new HomePage()
    
    let user;

    before(() => {
    
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("The user should be able to subscribe on the home page", () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        cy.scrollTo('bottom')
        cy.getBySel(LOCATORS.HOME_PAGE.SUBSCRIPTION_TEXT).should("be.visible")
        cy.getBySel(LOCATORS.HOME_PAGE.INPUT_BOX_FOR_EMAIL).type(user.home.emailForSubscription);
        cy.getBySel(LOCATORS.HOME_PAGE.ARROW_BTN).click();
        cy.getBySel(LOCATORS.HOME_PAGE.SUCCESS_SUBS_MSG_).should("be.visible")
    })
})

