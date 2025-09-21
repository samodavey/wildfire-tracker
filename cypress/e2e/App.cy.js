describe("App component", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://eonet.gsfc.nasa.gov/api/v3/events", {
      statusCode: 200,
      body: {
        events: [
          {
            id: "EONET_1",
            title: "Wildfire in California",
            categories: [{ id: "wildfires", title: "Wildfires" }],
            geometry: [{ coordinates: [-121.5, 38.5] }],
          },
        ],
      },
    }).as("getEvents");
  });

  it("renders Loader first, then Map after data is loaded", () => {
    cy.visit("http://localhost:3000");

    // assert Loader is visible
    cy.get('[data-testid="loader"]').should("exist");

    // wait for API + assert map renders
    cy.wait("@getEvents");
    cy.get('[data-testid="map"]', { timeout: 10000 }).should("exist");
  });
});