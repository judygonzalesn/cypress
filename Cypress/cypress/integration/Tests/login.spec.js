describe('Login', ()=> {
    it('Open login page', ()=> {
        cy.visit('http://magenicmovies.azurewebsites.net/')
        .contains('Login')
        .contains('Login').click()
        .url().should('include','/login');
    })

    it('Login user', ()=> {
       cy.get('[formcontrolname="email"]').type('test@admin.com')
       .get('[type="password"]').type('test123')
       .get('[type="submit"]').click()
       .get('ul:nth-child(2) > li:nth-child(1) > a').should('contain', 'test@admin.com')
       .click('[href="/admin"]')
       .get('div.col-md-2 > * > * > select').select(' Movie ')
       .get('href').should('contain', '/admin/movie/3')
    })
});