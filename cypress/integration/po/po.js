class Page {
    consoleLog(){
        console.log('it works');
    }

    mainMenu(){
        return cy.get('#menu-mainmenu');
    }

    menuItemProducts(){
        return this.mainMenu().get('[title="Products"]');
    }

    productsDropdownItems(){
        return cy.get('#menu-mainmenu > li[id*="menu-item"]:first-child > .dropdown-menu > li');
    }
}

module.exports.Page = Page;