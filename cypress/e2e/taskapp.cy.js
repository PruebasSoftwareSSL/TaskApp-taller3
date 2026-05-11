describe('Flujo básico de creación de tareas', () => {
  it('Debe iniciar sesión y crear una nueva tarea', () => {

    // Ingresar al login
    cy.visit('http://localhost:3000')

    // Escribir usuario y contraseña usando los IDs reales del HTML
    cy.get('#email').type('usuario@prueba.com')
    cy.get('#password').type('password_prueba')

    // Login
    cy.contains('button', 'Ingresar').click()

    // Aserción 1: validar que el panel de tareas es visible (la URL no cambia, es una SPA)
    cy.get('#tasks').should('be.visible')

    // Crear nueva tarea usando el ID real del input
    cy.get('#taskTitle').type('Nueva tarea Cypress')
    cy.contains('button', 'Crear').click()

    // Aserción 2: validar que la tarea aparece en el listado
    cy.get('#taskList').contains('Nueva tarea Cypress').should('exist')

    // Aserción 3: validar que el input quedó vacío después de crear
    cy.get('#taskTitle').should('have.value', '')
  })
})
