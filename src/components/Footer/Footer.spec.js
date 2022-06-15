import React from "react";
import Footer from ".";
import { render, screen } from "@testing-library/react";

describe("Footer component", () => {
  it("should show the description of tcs", () => {
    render(<Footer />);

    expect(
      screen.getByText("Projeto TCS Senac Santa Catarina - Palhoça")
    ).toBeInTheDocument();
  });

  it("must show the name of the students", () => {
    render(<Footer />);

    expect(
      screen.getByText("Desenvolvido por Jhony e Kamilla")
    ).toBeInTheDocument();
  });
});
