describe('', () => {
    beforeEach(() => { //beforeeach her bir it bloğundan yani her bir testten önce çalışır
        cy.visit('https://www.google.com')
        
    });
    it('', () => {
        cy.title().should('eq','Google')
        cy.title().should('include','Google')
    });
    it('url test', () => {
        cy.url().should('eq','google')
    });
});