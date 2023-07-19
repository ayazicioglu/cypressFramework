class Homepage{
    getLoginlink(){
        return   cy.get('.btn-sign-in-simple')
    }

    getVisit(){
        cy.visit('https://qa.qualitydemy.com/')
    }


    
}
export default Homepage