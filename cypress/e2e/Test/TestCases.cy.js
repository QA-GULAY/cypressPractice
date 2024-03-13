import LOCATORS from "../../support/locators"
import HomePage from "../Page/HomePage"

describe("TestCases Tests", () => {
    const homePage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })

    it("Kullanici test case sayfasina basariyla erisebilmeli", () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        cy.getBySel(LOCATORS.HOME_PAGE.TEST_CASES_BTN).click()
        cy.getBySel(LOCATORS.TESTCASES_PAGE.TESTCASES_TEXT)
    })

})