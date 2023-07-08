/*
TEST-2 Negatif Login İşlemi
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  baba71@gmail.com 123456 ile giriş yap
4-  Giriş yapılamadığını doğrula 
*/

describe('Negatif Login İşlemi', () => {
    it('Test Adimlari', () => {
         //  1-  http://www.automationexercise.com
         cy.visit('http://www.automationexercise.com')

         //2-  Signup/Login sayfasına git
         cy.get('.shop-menu > .nav > :nth-child(4)').click()

         //3-  baba71@gmail.com 123456 ile giriş yap
         cy.get('[data-qa="login-email"]').type('baba71@gmail.com')
         cy.get('[data-qa="login-password"]').type('123456')
         cy.get('[data-qa="login-button"]').click()

         //4-  Giriş yapılamadığını doğrula 
         cy.get('.login-form > form > p').should('include.text','Your email or password is incorrect!')
         cy.log('Test basariyla tamamlandi')
    });
});