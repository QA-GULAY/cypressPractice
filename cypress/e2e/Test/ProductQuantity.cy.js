import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
describe('Product Quantity in Cart Test', () => {
    
    const homePage = new HomePage

    let user;

    before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
   })
    it('The user should be able to verify the product they have increased the number of in the basket.', () => {
        homePage.visitPage()
        cy.contains(user.home.homePageText).should("be.visible")
        cy.getBySel(LOCATORS.PRODUCT_PAGE.VIEW_PRODUCT_BTN).click()
        cy.url().should('include', '/product_details/1')
        cy.get('#quantity').clear().type(4).should('have.value', '4');
        cy.getBySel(LOCATORS.PRODUCT_QUANTITY.ADD_TO_CARD_BUTTON).click()
        cy.getBySel(LOCATORS.ADD_TO_CARD.VIEW_CARD).click()
        cy.getBySel(LOCATORS.PRODUCT_QUANTITY.QUANTITY_DETAIL).should('contain', '4')
    })
});
