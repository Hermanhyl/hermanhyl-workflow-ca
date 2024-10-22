describe(`auth`, () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it(`should able the user to login with valid credentials`, () => {
    cy.get(`#registerForm`).find(`button[data-auth=login]`).click();
    cy.wait(500);
    cy.get(`#loginForm`).within(() => {
      cy.get(`#loginEmail`).type(`herman@stud.noroff.no`);
      cy.get(`#loginPassword`).type(`Herman123`);

      cy.get(`button[type="submit"]`).click();
    });
  });

  it(`shows an error when trying to login with invalid credentials`, () => {
    cy.get(`#registerForm`).find(`button[data-auth=login]`).click();
    cy.wait(500);
    cy.get(`#loginForm`).within(() => {
      cy.get(`#loginEmail`).type(`herman@stud.noroff.no`);
      cy.get(`#loginPassword`).type(`herman321`);

      cy.get(`button[type="submit"]`).click();
    });
    cy.on(`window:alert`, (alertText) => {
      expect(alertText).to.contains("Username or password are incorrect");
    });
  });

  it(`should be able to logout`, () => {
    cy.get(`#registerForm`).find(`button[data-auth=login]`).click();
    cy.wait(500);
    cy.get(`#loginForm`).within(() => {
      cy.get(`#loginEmail`).type(`herman@stud.noroff.no`);
      cy.get(`#loginPassword`).type(`Herman123`);

      cy.get(`button[type="submit"]`).click();
    });
    cy.get(`button[data-auth=logout]`).click();
  });
});
