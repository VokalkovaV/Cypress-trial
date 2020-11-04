const page = require('./home-page.po.js');
//todo: discuss solution for export/import

describe('Home Page experimental basic tests', () =>{
    let homePage;

    beforeEach(() => {
        homePage = new page.HomePage();
        cy.visit('/');
    });

    it('product dropdown items container open on hover', () => {
        cy.get(homePage.getMenuItemProducts()).invoke('show');
    });

    it('product dropdown container contains 6 items', () => {
        homePagehomePage.getProductsDropdownItems().should('have.length', 6);
    });

    it('first product dropdown item opens new page on click', () => {
        homePagehomePage.menuItemProducts().invoke('show');
        console.log(homePagehomePage.getBiobankingLink());
        homePagehomePage.getBiobankingLink().click({force:true}); //todo: find way around this issue
        cy.url().should('contain', 'features');
    });
});