import LOCATORS from "../../support/locators";
import HomePage from "../Page/HomePage";
describe('Scroll Down Functionality Test', () => {
    const homePage = new HomePage
    let user;
 before(() => {
        cy.fixture('userDatas/info').then((userInfo) => {
            user = userInfo
        })
    })
    it('The user should be able to see the subscription button', () => {
        homePage.visitPage() 
        cy.title().should('eq', user.home.title) 
        cy.getBySel(LOCATORS.PAGE_SCROLL.SCROLL).scrollIntoView()
        cy.getBySel(LOCATORS.PAGE_SCROLL.SCROLL).should('be.visible')
        cy.getBySel(LOCATORS.PAGE_SCROLL.HOMETEXT).scrollIntoView().should('be.visible')
    });

    it('The user should be able to move the page up and down using the arrow button.', () => {

        homePage.visitPage() 
        cy.title().should('eq', user.home.title) 
        cy.getBySel(LOCATORS.PAGE_SCROLL.SCROLL).trigger('mousedown').should('be.visible')
        cy.wait(2000)
        cy.getBySel(LOCATORS.PAGE_SCROLL.ARROW_BTN).click().trigger('mouseup','topRight')
        cy.getBySel(LOCATORS.PAGE_SCROLL.HOMETEXT).should('be.visible')
    });
    });
    
