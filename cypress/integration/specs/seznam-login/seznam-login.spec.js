const page = require('./seznam-login.po');

describe('Seznam login exercise test', () =>{
   let seznamLoginPO;

   beforeEach(() =>{
       seznamLoginPO = new page.SeznamLoginPo();

       cy.visit('https://www.seznam.cz/');

   });

   // it('login form is displayed', () => {
   //     seznamLoginPO.loginForm().should('be.visible');
   // });

   it('user can successfully complete login', () =>{
      seznamLoginPO.usernameInput().type(seznamLoginPO.username);
      seznamLoginPO.domainSelect().click();
       seznamLoginPO.domainSelectOption().get('select').select('@email.cz');
      // seznamLoginPO.passwordInput().type(seznamLoginPO.password);
   });
});