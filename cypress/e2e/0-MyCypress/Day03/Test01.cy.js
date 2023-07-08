describe('Pozitif login Testi', () => {
    it('pozitif test', () => {
      //  1-  http://www.automationexercise.com
        cy.visit('http://www.automationexercise.com')

      //2-  Signup/Login sayfasına git
      cy.get('.shop-menu > .nav > :nth-child(4)').click()

      //3-  “Login to your account” yazısının bulunduğunu doğrula
      cy.log('Login to your account yazisi kontrol ediliyor')
      cy.get('.login-form > h2').should('be.visible')

      //4-  “New User Signup!” yazısının varlığını doğrula
      cy.get('.signup-form > h2').should('be.visible')

      //5-  babayigit@gmail.com 123456 ile giriş yap
      cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
      cy.get('[data-qa="login-password"]').type('123456')
      cy.get('[data-qa="login-button"]').click()

      //6-  Giriş yaptığını doğrula
      cy.get('.shop-menu > .nav > :nth-child(4) > a').should('include.text','Log out')

      //7-  Çıkış yap
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

      //8-  Çıkış yapıldığını doğrula
      cy.get(':nth-child(4) > a').should('be.visible')

    });

    it('negatif test', () => {
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

      
    });
});

/*
TEST  – 1 Pozitif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  “Login to your account” yazısının bulunduğunu doğrula
4-  “New User Signup!” yazısının varlığını doğrula
5-  babayigit@gmail.com 123456 ile giriş yap
6-  Giriş yaptığını doğrula
7-  Çıkış yap
8-  Çıkış yapıldığını doğrula
TEST-2 Negatif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  baba71@gmail.com 123456 ile giriş yap
4-  Giriş yapılamadığını doğrula 
*/