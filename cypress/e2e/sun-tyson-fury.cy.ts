import cypress from "cypress"

describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://thesun.co.uk")
  })
  const getIframeDocument = (selector) => {
    return cy.get(selector).its("0.contentDocument").should("exist")
  }

  const getIframeBody = (selector) => {
    return getIframeDocument(selector)
      .its("body")
      .should("not.be.undefined")
      .then(cy.wrap)
  }

  it("Search for Tyson Fury", () => {
    getIframeBody("#sp_message_iframe_808654")
      .find('[title="Fine By Me!"]')
      .should("be.visible")
      .click()
    cy.get(".header-search-placeholder").should("be.visible").click()
    cy.get('[data-cy="header-search-input"]')
      .should("be.visible")
      .click()
      .type("Tyson Fury")
      .wait(1)
      .type("{enter}")
    cy.get(".search-page-header__query")
      .should("be.visible")
      .should("have.text", "Tyson Fury")
    cy.get('h3:contains("Fury")').each(($article) => {
      if ($article.next().text().includes("Tyson Fury")) {
        $article.trigger("click")
        console.log(
          $article
            .parent()
            .parent()
            .attr("data-id")
        )
        return false
      }
    })
    cy.get("main[class='col sun-col-4'").contains("Tyson Fury")
  })
})
