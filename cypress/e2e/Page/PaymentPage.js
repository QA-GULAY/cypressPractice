import LOCATORS from "../../support/locators";

class PaymentPage {
  enterPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.NAME_ON_CARD).type(name);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CARD_NUMBER).type(cardNumber);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.CVC_NUMBER).type(cvc);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_MONTH).type(expiryMonth);
    cy.getByDataQa(LOCATORS.PAYMENT_PAGE.EXPIRATION_YEAR).type(expiryYear);
  }
    getSuccessTextMessage() {
    return cy.get(LOCATORS.PAYMENT_PAGE.SUCCESS_MESSAGE);
  }
   clickProceedToCheckoutBtn(){
   cy.getBySel(LOCATORS.ADD_TO_CARD.PROCEED_TO_CHECKOUT_BTN).click()
  }
   descriptionComment(user){
  cy.getBySel(LOCATORS.PAYMENT_PAGE.DESCRIPTION_FORM).type(user.paymentPage.description)
  }  
   clickPlaceOrderBtn(){
   cy.getBySel(LOCATORS.PAYMENT_PAGE.PLACE_ORDER_BTN).click()
  }
   clickPayAndConfirmBtn(){
   cy.getByDataQa(LOCATORS.PAYMENT_PAGE.PAY_AND_CONFIRM_ORDER_BTN).click()
  } 

}

export default PaymentPage;
