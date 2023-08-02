describe('WriteandRead Files', () => {
    it('Writes Files', () => {
        cy.writeFile('cypress/fixtures/ornek.txt','{\n"username":"mb@babayigit.net"\n}')

    });

    
});