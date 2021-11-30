describe('Register', () => {

    beforeEach(() => {

        cy.visit('http://magenicmovies.azurewebsites.net/')
        .contains('Register')
        .contains('Register').click()
    })

    it('Verify URL', () => {
            cy.url().should('include', '/register')
    })

    it('Login user', () => {
        cy.get('[formcontrolname="email"]').type('test@admin.com')
            .get('[formcontrolname="firstName"]').type('testfn')
            .get('[formcontrolname="lastName"]').type('testln')
            .get('[type="password"]').type('test123')
            .get('[formcontrolname="middleName"]').type('testmn')
            .get('[formcontrolname="birthDay"]')
            .type('2011-06-03')
            .get('[type="submit"]').click().then(() => { 
                //Handling Async behavior using then method 
                console.log('Using Log'); 
              })
    })

    it('User Already Exist', () => {
        cy.get('[formcontrolname="email"]').type('test@admin.com')
            .get('[formcontrolname="firstName"]').type('testfn')
            .get('[formcontrolname="lastName"]').type('testln')
            .get('[type="password"]').type('test123')
            .get('[formcontrolname="middleName"]').type('testmn')
            .get('[formcontrolname="birthDay"]')
            .type('2011-06-03')
            .get('[type="submit"]').click({force:true})
            .get('form > div.row.text-danger > p').should('contain.text', 'Email already exists')
            
          
    })
});