describe('Login testi', () => {
    it('qualitydemy login testi', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.btn-sign-in-simple').click()

        // 2.yontem
        // cy.contains('Login').click()

        // 3.yontem
        // cy.contains('log in', {matchCase:false}).click() buyuk-kucuk harf bakmaksızın elementi bulur ve tiklar

        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b')
        cy.get('#sign_up > :nth-child(3) > .btn').click()

        //2. yontem
       // cy.get('#login-email').type('mb@babayigit.net')
       // cy.get('#login-password').type('M123456.b{enter}')
    });

    
});



