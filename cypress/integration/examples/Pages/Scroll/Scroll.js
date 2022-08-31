
import locatorsPage from '../../../Locators/Locators';

const scrollTest= new locatorsPage();

it('khatabook scroll bottom to top',  () => {
    cy.visit(scrollTest.url);
    cy.scrollTo("bottom", { duration: 5000 });
    cy.scrollTo('top', {duration:5000});
    //------------------ correct---------------------------------
    // cy.scrollTo('bottom');
    // cy.wait(5000)
    // cy.scrollTo('top');
    


})

