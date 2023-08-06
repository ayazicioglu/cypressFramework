describe('assertion yapma', () => {
    beforeEach('qualitydemy login testi', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()
    });
       it('', () => {
          //1 have-text >> girilen sayfada ilgili yazı var mı yok mu assertionu yapar
        cy.get('.btn-sign-in-simple').should('have.text','Log in')
       });

       it('', () => {
         //2 cy.url().should() >> login adresinde login kelimesi geçiyormu assertionu yapar
        cy.get('.btn-sign-in-simple').click()
        cy.url().should('include','login')
       });

      
       it('', () => {
         //3 cy.title.should >> sayfanın title i istenen değere tam eşit mi
        cy.title().should('eq','Login | QualityDemy')
       });

       
       it('', () => {
             //4 be.visible >> element görünüyor mu assertionu yapar
        cy.get('.text-14px').should('be.visible')
       });
       
       
       it('', () => {
         //5 include text >> element texti içeriyor mu assertionu yapar
        cy.get('.btn-sign-in-simple').should('include.text','Log')
       });
       
        
    });
