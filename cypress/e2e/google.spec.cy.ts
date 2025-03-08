/* eslint-disable jest/valid-expect */
/// <reference types="cypress" />

describe('My first test', () => {
  it('compare with true', () => {
    const value = true
    expect(value).to.equal(true);
  })

  it('searches for "teste automatizado com cypress" in google', () => {
    cy.visit('https://google.com.br')

    cy.get('textarea[name="q"]').type("teste automatizado com cypress");
    cy.contains('Pesquisa Google').click()
  });
})