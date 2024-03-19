import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators";
describe("Add to Cart Tests", () => {
    const homePage = new HomePage()
    let user;
    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it("The user must be able to successfully add the products to the cart.", () => {
        homePage.visitPage()
        cy.getBySel(LOCATORS.HOME_PAGE.PRODUCTS_BTN).should("be.visible")
        cy.getBySel(LOCATORS.HOME_PAGE.PRODUCTS_BTN).click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_1).contains('Add to cart').should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_1).contains('Add to cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.COUNTINUE_SHOPPING).should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CARD.COUNTINUE_SHOPPING).click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2).contains('Add to cart').should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2).contains('Add to cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.VIEW_CARD).should("be.visible")
        cy.getBySel(LOCATORS.ADD_TO_CARD.VIEW_CARD).click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_1_PRICE).should('contain','Rs. 500')
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2_PRICE).should('contain','Rs. 400')
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_1_QUANTITY).should('contain','1')
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_1_TOTAL).should('contain','Rs. 500')
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2_QUANTITY).should('contain','1')
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_2_TOTAL).should('contain','Rs. 400')


    })

    it('should add recommended items to the cart', () => {
        cy.visit('/')
        cy.scrollTo('bottom')
        cy.getBySel(LOCATORS.ADD_TO_CARD.RECOMENDED_ITEMS).should('be.visible')
        cy.getBySel(LOCATORS.ADD_TO_CARD.ADD_RECOMENDED).first().click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.VIEW_CART).contains('View Cart').click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.CART_PRODUCT).should('be.visible')
      });    

})
