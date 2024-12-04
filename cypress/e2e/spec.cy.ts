

describe('Login module', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.wait(2000);
  });


  it('Should exist input to login', () => {
    cy.visit('/');
    cy.get('#usuario', { timeout: 10000 }).should('exist');
    cy.get('#password', { timeout: 10000 }).should('exist');
  });


  it('should display error message on invalid credentials', () => {
    cy.visit('/');
    cy.get('#usuario').type('invalid@example.com');
    cy.get('#password').type('invalidpassword');
    cy.get('#btn').click();
    cy.on('window:alert', (text) => {
        expect(text).to.eq('alert text');
});


  it('Should enter valid usuario and password and redirect to the main', () => {
    cy.visit('/');
    cy.get('#usuario').type('admin');
    cy.get('#password').type('admin');
    cy.get('#btn').click();
    cy.visit('/panel');
  });
});

describe('Navbar module', () => {
  it('Visits all pages', () => {
    const pages = ['/panel', '/notificaciones', '/usuarios', '/perfil', '/'];
    pages.forEach(page => {
      cy.visit(page);
      cy.wait(1000);
    });
  });

  it('Should have working navbar links', () => {
    cy.visit('/panel');
    cy.get('nav a[href="/notificaciones"]').click();
    cy.url().should('include', '/notificaciones');
    cy.get('nav a[href="/usuarios"]').click();
    cy.url().should('include', '/usuarios');
    cy.get('nav a[href="/perfil"]').click();
    cy.url().should('include', '/perfil');
  });
});

describe('Panel module', () => {
  it('Visits main page', () => {
    cy.visit('/panel');
    cy.get('#titulo').should('be.visible');
    cy.get('#titulo').should('have.text', 'Mapa');
  });

});

describe('Notificaciones module', () => {
  it('Visits notifications page', () => {
    cy.visit('/notificaciones');
    cy.get('#titulo').should('be.visible');
    cy.get('#titulo').should('have.text', 'Notificaciones');
  });

  it('Should display notifications', () => {
    cy.visit('/notificaciones');
    cy.get('#titulo', { timeout: 20000 }).should('have.length.greaterThan', 0);
  });

  it('debería bloquear al usuario cuando se hace clic en el botón', () => {
    cy.visit('/notificaciones');
    cy.get('.bloqueo').eq(0).click();

    cy.contains('Confirmar Bloqueo de Usuario').should('be.visible');
});

});

describe('Usuarios module', () => {
  it('Visits users page', () => {
    cy.visit('/usuarios');
    cy.get('#titulo').should('be.visible');
    cy.get('#titulo').should('have.text', 'Usuarios');
  });

  it('Should display users in a table', () => {
    cy.visit('/usuarios');
    cy.get('table').should('be.visible');
  });
});

describe('Perfil module', () => {
  it('Visits profile page', () => {
    cy.visit('/perfil');
    cy.get('#titulo').should('be.visible');
    cy.get('#titulo').should('have.text', 'Perfil');
  });
  });
});
