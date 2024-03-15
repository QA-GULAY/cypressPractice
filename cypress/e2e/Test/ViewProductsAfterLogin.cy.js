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
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2).contains('Add to cart').should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CART.PRODUCT_2).contains('Add to cart').click().wait(2000)
        cy.getBySel(LOCATORS.ADD_TO_CART.VIEW_CART).click()
        cy.getBySel(LOCATORS.CART_PAGE.CART_DESCRIPTION).should('contain','Men Tshirt')
        cy.getBySel(LOCATORS.CART_PAGE.LOGIN_BTN_CART_PAGE).click()
        loginPage.userLogin(user)
        cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER,LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT).should('be.visible')
        cy.getBySel(LOCATORS.HOME_PAGE.CART_BUTTON).click()
        cy.getBySel(LOCATORS.CART_PAGE.CART_DESCRIPTION).should('contain','Men Tshirt')
    });   
});
    





