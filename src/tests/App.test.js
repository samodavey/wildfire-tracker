/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

// Mock child components
jest.mock("../components/Map", () => jest.fn(() => <div>Mocked Map</div>));
jest.mock("../components/Loader", () => jest.fn(() => <div>Mocked Loader</div>));
jest.mock("../components/Header", () => jest.fn(() => <div>Mocked Header</div>));

describe("App component", () => {
  beforeEach(() => {
    // Mock fetch response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            events: [{ id: "1", title: "Test Event" }],
          }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Map component after data is loaded", async () => {
    render(<App />);

    // Wait for mocked Map to render
    const mapElement = await screen.findByText("Mocked Map");
    expect(mapElement).toBeInTheDocument();
  });
});