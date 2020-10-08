import  con from './home-page.con'

class HomePage {

    getMainMenu(){
        return cy.get(con.mainMenu);
    }

    getMenuItemProducts(){
        return this.getMainMenu().get(con.menuItemProducts);
    }

    getProductsDropdownItems(){
        return cy.get(con.productsdropdownItems);
    }

    getBiobankingLink(){
        return cy.get(con.bionbankingLink);
    }
}

module.exports.HomePage = HomePage;