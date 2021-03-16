
Given(/^acesso ao site do globo$/, () => {
	cy.visit('/')
});


When(/^tento pesquisar "concurso"$/, () => {
	cy.get('input[id="header-search-input"]').click().type('concurso').type('{enter}')
});


Then(/^concurso é pesquisado$/, () => {
	cy.get('div[class="filters__container"]')
	.should('be.visible')
});
