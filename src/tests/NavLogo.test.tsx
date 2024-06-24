import "@testing-library/jest-dom";

import Header from "@components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  it("renders the logo image", () => {
    render(<Header />);
    const logoImage = screen.getByAltText("imageLogo");
    expect(logoImage).toBeInTheDocument;
  });
});
