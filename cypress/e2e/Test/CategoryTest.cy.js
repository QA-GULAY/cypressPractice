import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators"
describe("Category Test", () => {
    const homePage = new HomePage

    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("The user successfully accesses to the product categories on the left side of the home page. ", () => {
        homePage.visitPage()
        cy.getBySel(LOCATORS.HOME_PAGE.CATEGORY).should('have.text', user.home.category)
        homePage.clickWomen()
        homePage.clickDress()
        homePage.verifyProductsCategory().contains(user.categoryPage.text_Dress)
        cy.getBySel(LOCATORS.CATEGORY.JEANS).click({ force: true })
        homePage.verifyProductsCategory().contains(user.categoryPage.text_Jeans)
    })
})