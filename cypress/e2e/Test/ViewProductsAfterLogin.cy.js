import HomePage from "../Page/HomePage"
import LoginPage from "../Page/LoginPage"
import LOCATORS from "../../support/locators"
describe("View products after login",() => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()

    let user;
    
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
 it("The user can see added product after login" , () => {
        homePage.visitPage()
        cy.getBySel(LOCATORS.HOME_PAGE.HEADER).should("be.visible");
        cy.getBySel(LOCATORS.PRODUCT_PAGE.PRODUCT_BTN).click().wait(2000);
        cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCTS_TEXT).should('be.visible');
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_BOX).click()
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_BOX).type("Men Tshirt")
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCH_ITEM).click()
        cy.getBySel(LOCATORS.PRODUCT_PAGE.SEARCHED_PRODUCTS_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2).contains('Add to cart').should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2).contains('Add to cart').click().wait(2000)
        cy.getBySel(LOCATORS.ADD_TO_CARD.VIEW_CARD).click()
        cy.getBySel(LOCATORS.CARD_PAGE.CARD_DESCRIPTION).should('contain','Men Tshirt')
        cy.getBySel(LOCATORS.CARD_PAGE.LOGIN_BTN_CARD_PAGE).click()
        loginPage.userLogin(user)
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER,LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.HOME_PAGE.CARD_BTN).click()
        cy.getBySel(LOCATORS.CARD_PAGE.CARD_DESCRIPTION).should('contain','Men Tshirt')
    });   
});
    





