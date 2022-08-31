
// import locatorsPage from '../../Locators/Locators';

//const abc= new locatorsPage();

it('right to left to center',  () => {
    cy.visit('http://autopract.com/selenium/scroll1/');
    cy.get("div.article2").scrollTo("right", { duration: 5000 });
    cy.get("div.article2").scrollTo('left', {duration:5000});
    cy.get("div.article2").scrollTo('center', {duration:5000});
    //------------------ correct---------------------------------
    // cy.scrollTo('bottom');
    // cy.wait(5000)
    // cy.scrollTo('top');
    


})