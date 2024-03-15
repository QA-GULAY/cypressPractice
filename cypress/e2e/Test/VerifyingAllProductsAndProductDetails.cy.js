import HomePage from "../Page/HomePage"
import LOCATORS from "../../support/locators"
describe('Verify all products and product detail page ', ()=>{

const hmePage = new HomePage()
let user

before(() => {
    cy.fixture('userDatas/info').then((userInfo) => {
        user = userInfo
    })
})
it('The user should be able to enter the detail section of the first product and see all the details about the product.',()=>{
    hmePage.visitPage()
    cy.getBySel(LOCATORS.HOME_PAGE.HEADER).should("be.visible");
    cy.getBySel(LOCATORS.HOME_PAGE.PRODUCTS_BTN).click()
    cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCTS_TEXT).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.ALL_PRODUCT).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.VIEW_PRODUCT_BTN).click()
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_NAME).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_PRICE).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_AVAILABILITY).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_CONDITION).should('be.visible')
    cy.getBySel(LOCATORS.PRODUCT_PAGE.FIRST_PRODUCT_BRAND).should('be.visible')
  })
})