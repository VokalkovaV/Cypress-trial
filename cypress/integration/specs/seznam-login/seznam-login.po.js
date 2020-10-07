class SeznamLoginPo {

    username = 'tester.acc.cypress';
    password = '123456789abc';

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
        return cy.get('.login-form__domain');
        // return cy.get('select[name="domain"]');
    }

    passwordInput(){
        return cy.get('.input-w-button__input-wrap [name="password"]');
    }
}

module.exports.SeznamLoginPo = SeznamLoginPo;