describe('Nota Labs Quiz', () => {

  it('should load the app', () => {
    cy.visit('/')
  })

  it('should be able to start the quiz', () => {
    cy.findByTestId('StartQuiz')
      .should('contain', 'Start')
      .click();
  });

  it('should be able to view the question', () => {
    cy.findByTestId('QuizForm')
      .should('have.length', 1)
  });

  it('displays list of 3 answers', () => {
    cy.get('[class^=form-check-input]')
      .should('have.length', 3)
  })

  // it should have answers

  // it should be able to go to the next question

  // it should be able to view the report

  // it('should be able to dismiss the alert', () => {
  //   cy.findByTestId('AlertWrapper').should('have.length', 1);
  //   cy.findByTestId('AlertButton').click();
  //   cy.wait(300)
  //     .queryByTestId('AlertWrapper')
  //     .should('not.exist');
  // });

  // it('should be able to toggle the selector', () => {
  //   cy.findByTestId('GitHubSelector')
  //     .find('button:last-child')
  //     .not('[disabled]')
  //     .should('have.text', 'Redux')
  //     .click();
  // });

  // it('should render the redux repos ', () => {
  //   cy.findByTestId('GitHubGrid')
  //     .should('have.length', 1)
  //     .should('have.attr', 'data-type', 'redux');
  // });

  // it('should be able to logout', () => {
  //   cy.get('[class^=Logout]').click();
  // });

  // it('should have redirected to /', () => {
  //   cy.findByTestId('HomeWrapper').should('have.length', 1);
  // });

  // it('should be able to start again', () => {
  //   cy.findByTestId('Login')
  //     .should('contain', 'Start')
  //     .click();

  //   cy.findByTestId('PrivateWrapper').should('have.length', 1);
  // });

  // it('should be able to logout again', () => {
  //   cy.get('[class^=Logout]').click();

  //   cy.findByTestId('HomeWrapper').should('have.length', 1);
  // });
});
