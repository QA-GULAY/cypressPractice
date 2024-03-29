import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage"
describe("Searching Test", () => {
  const homePage = new HomePage()
  
    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("The user should be able to view all products", () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        cy.getBySel(LOCATORS.HOME_PAGE.PRODUCTS_BTN).click();
        cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCTS_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_BOX).type(user.productPage.productName);
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_ITEM).click();
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCHED_PRODUCTS_TEXT).should('be.visible')
    })

})
