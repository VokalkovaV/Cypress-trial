const page = require('./biobanking-page.po');

describe('Biobanking Page experimental tests', () => {
let biobankingPage;

    beforeEach(() =>{
       biobankingPage = new page.BiobankingPagePo();
       cy.visit(biobankingPage.pageUrl);
    });

    describe('Download Bttn - ', () =>{
       it('have target blank attribute', () => {
          cy.get(biobankingPage.downloadBttn).first().should('have.attr', 'target', '_blank');
       });

       it('can be clicked', () =>{
           cy.get(biobankingPage.downloadBttn).first().click();
           //todo: find solution for appropriate assert, but it should be assertion by itself
       });
    });

    describe('Footer links - ', () =>{
       it('second link open correct page on click', () =>{
           cy.get(biobankingPage.footerLinkScheduleDemo).click();
           cy.url().should('contain','schedule-a-demo');
       });
    });
});