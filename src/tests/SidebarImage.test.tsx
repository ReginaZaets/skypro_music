import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "@components/Sidebar/Sidebar";

test("renders the logo image", () => {
  render(<Sidebar />);
  expect(screen.getByAltText("Плейлист дня")).toBeInTheDocument();
});
