

describe('Verify the ContactUs Page', function () {
    it("Verify the Title for contactus Page", function () {
        cy.visit('Contact-Us/contactus.html')
        cy.get('[name="first_name"]').should('be.visible')
    })

    it.only("Verify the Title for contactus Page", function () {
        let url = Cypress.config().baseUrl
        cy.log(url)
        cy.visit(url)
    })

    //  npx cypress run --headed --browser chrome --config baseUrl="https://google.com"
    // Local  - https:www.google.com
    // Staging -  https://www.facebook.com
    // Production - http://www.webdriveruniversity.com

})