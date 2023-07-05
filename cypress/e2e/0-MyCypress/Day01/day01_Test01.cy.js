const { it } = require("mocha");

describe('Temel Cypress Komutlari', () => {

    it('cy.visit komutu', () => {
        // cy.visit('https://www.wisequarter.com') //baseurl tanımlı degilse
        cy.visit('/about-us') // baseurl tanımlı ise
    });
    
    it('cy.visit komutu.2', () => {
    cy.visit('/about-us')
    });

    it('cy.title komutu', () => {
        cy.visit('/') //baseurl adrese gider
        cy.title().should('eq','IT Bootcamp, Distance education method - Wise Quarter Course') //title tam esitlik durumu
        cy.title().should('include','Bootcamp')
        cy.title().should('contains','Deliver')
    });

    it('cy.url ve cy.location komutu', () => {
        cy.visit('/')
        cy.url().should('eq','https://wisequarter.com/')
        cy.url().should('include','wisequarter')
        
    });

});