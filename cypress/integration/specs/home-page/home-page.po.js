import  con from './home-page.con'

class HomePage {

    mainMenu(){
        return cy.get(con.mainMenu);
    }

    menuItemProducts(){
        return this.mainMenu().get(con.menuItemProducts);
    }

    productsDropdownItems(){
        return cy.get(con.productsdropdownItems);
    }

    biobankingLink(){
        return cy.get(con.bionbankingLink);
    }
}

module.exports.HomePage = HomePage;