import HomePage from "../Page/HomePage"
import CategoryPage from "../Page/CategoryPage"
import LOCATORS from "../../support/locators"
describe("Category Test", () => {
    const homePage = new HomePage
    const categoryPage = new CategoryPage
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("The user successfully accesses to the product categories on the left side of the home page. ", () => {
        homePage.visitPage()
        homePage.verifyCategoryTitle().should('have.text', user.home.category)
        homePage.clickWomen()
        homePage.clickDress()
        categoryPage.verifyProductsCategory().contains(user.categoryPage.text_Dress)
        categoryPage.clickJeans()
        categoryPage.verifyProductsCategory().contains(user.categoryPage.text_Jeans)
    })
})