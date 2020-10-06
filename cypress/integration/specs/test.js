const page = require('../po/po.js');

describe('test implementation try', () =>{
    let base;

    beforeEach(() => {
        base = new page.Page();
        cy.visit('/');
    });

    // it('product dropdown items container open on hover', () => {
    //     console.log(base.consoleLog());
    //     // base.mainMenu();
    //     cy.get(base.menuItemProducts()).invoke('show');
    // });
    //
    // it('product dropdown container contains 6 items', () => {
    //     base.productsDropdownItems().should('have.length', 6);
    // });

    it('first product dropdown item opens new page on click', () => {
        cy.get(base.menuItemProducts()).invoke('show');
        cy.get('[title="Biobanking LIMS"]').click({force:true}); //find way around this issue
        //todo:

    });


});