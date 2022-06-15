import React from "react";
import { render, screen } from "@testing-library/react";
import About from ".";

describe("About component", () => {
  it("should show the title of the site", () => {
    render(<About />);

    expect(
      screen.getByText("Encontre o hotel ideal para o seu amigão")
    ).toBeInTheDocument();
  });
});
