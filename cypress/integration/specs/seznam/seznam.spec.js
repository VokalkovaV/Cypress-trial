const page = require('./seznam.po');

describe('Seznam exercise tests', () =>{
   let seznamPo;

   beforeEach(() =>{
       seznamPo = new page.SeznamPo();
       cy.visit('https://www.seznam.cz?');
   });

   describe('Login - ', () =>{
      it('login form is displayed', () => {
          seznamPo.loginForm().should('be.visible');
      });

      it('user can successfully complete login', () =>{
         seznamPo.usernameInput().type(seznamPo.username);
         seznamPo.domainSelectOption().select('@seznam.cz');
         seznamPo.passwordInput().type(seznamPo.password);
         seznamPo.loginSubmitButton().click();
         //fails because of testing 3rd party web login, deny access
         // todo: Opening in new incognito window for each test don´t work, because when I log in with some test, I stay logged in.
      });
   });

   describe('Search - ', () =>{
      it('search works with submit button', () => {
         seznamPo.searchInput().type('corona');
         seznamPo.searchSubmitButton().click();
      });

      it('search find 6 suggested search options', () =>{
         seznamPo.searchInput().type('corona');
         seznamPo.searchSuggestedList().find('li').should('have.length', 6);
      });
   });
});