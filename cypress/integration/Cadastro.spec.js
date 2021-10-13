/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando eu informar o e-mail e clicar em criar sua conta, então deve-se preencher os dados e finalizar o cadastro', () => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

    cy.get('input[name=email_create]').type(chance.email())
    cy.get('#SubmitCreate > span').click()

    cy.get('input[value=2]').check()
    cy.get('input[name=customer_firstname]').type(chance.first())
    cy.get('input[name=customer_lastname]').type(chance.last())
    cy.get('input[name=passwd]').type('123456')

    cy.get('select#days').select('13', { force: true} )
    cy.get('select#months').select('11', { force: true} )
    cy.get('select#years').select('2003', { force: true} )

    cy.get('input[name=newsletter]').check({ force: true})
    cy.get('input[name=optin]').check({ force: true})
    
    cy.get('input[name=company]').type(chance.company())
    cy.get('input[name=address1]').type(chance.address())
    cy.get('input[name=address2]').type('Apartamento')
    cy.get('input[name=city]').type('Qualquer coisa')

    cy.get('select#id_state').select('Alabama', { force: true})
    cy.get('input[name=postcode]').type('12345')
    cy.get('select#id_country').select('United States')

    cy.get('input[name=phone_mobile]').type(chance.phone())
    cy.get('input[name=alias]').type(chance.address())

    cy.get('#submitAccount > span').click()

    cy.url().should('contain', 'MINHA CONTA')
    
    });
    
});