/// <reference types="cypress" />
import Chance from 'chance';

const chance = new Chance();

describe('Cadastro', () => {
    it('Quando eu informar o e-mail e clicar em criar sua conta, então deve-se preencher os dados e finalizar o cadastro', () => {
        const firstName = chance.first();
        const lastName = chance.last();
        const email = chance.email();
    
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

    cy.get('input[name=email_create]').type(email)
    cy.get('#SubmitCreate > span').click()

    cy.get('input[value=2]').check()
    cy.get('input[name=customer_firstname]').type(firstName)
    cy.get('input[name=customer_lastname]').type(lastName)
    cy.get('input[name=passwd]').type('123456')

    cy.get('select#days').select(chance.natural({min: 1, max: 28}))
    cy.get('select#months').select(chance.month())
    cy.get('select#years').select(chance.year({ min: 1950, max: 2000}))

    cy.get('input[name=newsletter]').check({ force: true})
    cy.get('input[name=optin]').check({ force: true})
    
    cy.get('input[name=company]').type(chance.company())
    cy.get('input[name=address1]').type(chance.address())
    cy.get('input[name=address2]').type('Apartamento')
    cy.get('input[name=city]').type(chance.city())

    cy.get('select#id_state').select(chance.natural({ min: 1, max: 53}))
    cy.get('input[name=postcode]').type(chance.zip())
    cy.get('select#id_country').select('United States')

    cy.get('input[name=phone_mobile]').type(chance.phone())
    cy.get('input[name=alias]').type(chance.address())

    cy.get('select#id_state').select(chance.natural({ min: 1, max: 53}))
    cy.get('#submitAccount > span').click()

    cy.url().should('contain', 'my-account')

    cy.contains('My personal information').click();
    cy.url().should('contain', 'identity');
    cy.get('#firstname').should('contain.value', firstName);
    cy.get('#lastname').should('contain.value', lastName);
    cy.get('#email').should('contain.value', email);
    
    });
    
});