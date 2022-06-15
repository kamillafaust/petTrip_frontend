import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("should show the link for hotel registration", () => {
    render(<Header />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://my.forms.app/form/623e5dcd17a64c6caea88d12"
    );
  });
  it("should show the website logo", () => {
    render(<Header />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should show the name of the website", () => {
    render(<Header />);

    expect(screen.getByText("Pet Trip")).toBeInTheDocument();
  });
});
