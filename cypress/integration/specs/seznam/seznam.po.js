import list from './seznam.json'

class SeznamPo {

    username = 'tester.acc.cypress';
    password = '123456789abc';

    loginForm(){
        return cy.get(list.loginForm);

        // return cy.get('.login-form');
    }

    usernameInput(){
        return cy.get(list.usernameInput);
    }

    domainSelect(){
        return cy.get('select[name="domain"]');
    }

    domainSelectOption(){
        return cy.get(list.domainSelectOptio);
        // return cy.get('select[name="domain"]');
    }

    passwordInput(){
        return cy.get(list.passwordInput);
    }

    loginSubmitButton(){
        return cy.get(list.loginSubmitButton);
    }

    searchInput(){
        return cy.get(list.searchInput);
    }

    searchSuggestedList(){
        return cy.get(list.searchSuggestedList);
    }

    searchSubmitButton(){
        return cy.get(list.searchSubmitButton);
    }
}

module.exports.SeznamPo = SeznamPo;