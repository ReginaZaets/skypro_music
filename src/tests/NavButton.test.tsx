import "@testing-library/jest-dom";

import Header from "@components/Header/Header";
import { fireEvent, render, screen } from "@testing-library/react";
describe("header", () => {
  test("renders the correct  menu items", () => {
    render(<Header />);
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
  test("render burger", () => {
    render(<Header />);
    const toggleBurger = screen.getByTestId("burger");
    fireEvent.click(toggleBurger);
    expect(screen.queryByRole("list")).toBeInTheDocument();
  });
});
