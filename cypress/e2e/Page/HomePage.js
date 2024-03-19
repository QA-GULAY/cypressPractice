import LOCATORS from "../../support/locators"

class HomePage {

    visitPage() {
        cy.visit("/")
    }
    loggedUserNameText() {
        return cy.getByCompoundSel(LOCATORS.HOME_PAGE.HEADER, LOCATORS.LOGIN_PAGE.LOGGED_AS_TEXT)
    }
    clickProduct_1() {
        cy.getBySel(LOCATORS.ADD_TO_CARD.PRODUCT_1).contains('Add to cart').click()
    }
    clickView_CartBtn() {
        cy.getBySel(LOCATORS.ADD_TO_CARD.VIEW_CARD).click()
    }
    verifyCategoryTitle() {
        return cy.getBySel(LOCATORS.HOME_PAGE.CATEGORY);
    }
    verifyProductsCategory() {
        return cy.getBySel(LOCATORS.CATEGORY.PRODUCTS)
    }
    clickWomen() {
        cy.getBySel(LOCATORS.HOME_PAGE.WOMEN).contains('Women').click()
    }
    clickDress() {
        cy.getBySel(LOCATORS.HOME_PAGE.DRESS).click()
    }
}
export default HomePage
