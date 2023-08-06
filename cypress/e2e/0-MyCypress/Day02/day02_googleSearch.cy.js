describe('', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('google da 3 Idiots', () => {
        cy.get('#APjFqb').type('3 idiots{enter}')
    });
    

    it('tenet ara', () => {
        cy.get('#APjFqb').type('Tenet{enter}')
    });

    
});