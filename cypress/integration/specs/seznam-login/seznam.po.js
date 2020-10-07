class SeznamPo {

    username = 'tester.acc.cypress';
    password = '123456789abc';

    cookieFrame(){
        return cy.get('.scmp_Scrollable-content-wrapper');
    }

    loginForm(){
        return cy.get('.login-form');
    }

    usernameInput(){
        return cy.get('.login-form__input-wrap [name="username"]');
    }

    domainSelect(){
        return cy.get('select[name="domain"]');
    }

    domainSelectOption(){
        return cy.get('.login-form__domain select');
        // return cy.get('select[name="domain"]');
    }

    passwordInput(){
        return cy.get('.input-w-button__input-wrap [name="password"]');
    }

    loginSubmitButton(){
        return cy.get('.login-form__line button[type="submit"]');
    }

    searchInput(){
        return cy.get('form[data-dot="search-form"] .search-form__input-wrap');
    }

    searchSuggestedList(){
        return cy.get('div[data-dot="search-suggest"]');
    }

    searchSubmitButton(){
        return cy.get('button.search-form__button.button--submit');
    }
}


module.exports.SeznamPo = SeznamPo;