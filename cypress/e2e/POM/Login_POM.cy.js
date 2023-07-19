import Homepage from "../POM/Homepage.cy";
import LoginPage from "./Loginpage.cy";

describe('POM ile login', () => {
    it('Login testi', () => {
        const homepage= new Homepage()
        const loginpage= new LoginPage()
    

       homepage.getVisit() // cy.visit('https://qa.qualitydemy.com/')
       homepage.getLoginlink().click() // cy.get('.btn-sign-in-simple').click()

       loginpage.getUserEmail()
       loginpage.getPasswordBox()
       loginpage.getLoginButton()
       loginpage.getAssert()
    });


    
    
});