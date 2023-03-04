import{Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

Given('PreCondtion', ()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('Action', ()=>{
    cy.get('#signin_button').click();
    cy.get('#user_login').type('invalid username')
    cy.get('#user_password').type('invalid password')
    cy.contains('Sign in').click();

})

Then('Validation', ()=>{    
    cy.get('.alert-error').should('be.visible')
})

Given('User open url', ()=>{
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('User enter username {string}', username=>{
    cy.get('#signin_button').click();
    cy.get('#user_login').type(username)
    cy.get('#user_password').type('invalid password')
    cy.contains('Sign in').click();

})

And('User enter password {string}', password=>{
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})

And('User click signin button', ()=>{
    cy.contains('Sign in').click()
})

Then('Verify error message', ()=>{    
    cy.get('.alert-error').should('be.visible')
})