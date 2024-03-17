import LOCATORS from "../../support/locators"

class CartPage {
    
    clickToCheckoutBtn() {
        cy.getBySel(LOCATORS.CART_PAGE.CHECKOUT_BTN).click()
    }

}

export default CartPage