import Search from "@components/Search/Search";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ReduxProvider from "../store/ReduxProvider";

describe("search", () => {
  test("search", () => {
    render(
      <ReduxProvider>
        <Search />
      </ReduxProvider>
    );
    const inputElement = screen.getByPlaceholderText(/Поиск/i);
    expect(inputElement).toBeInTheDocument();
  });
  test("search", () => {
    render(
      <ReduxProvider>
        <Search />
      </ReduxProvider>
    );
    const inputElement = screen.getByPlaceholderText(/Поиск/i);
    expect(screen.queryByTestId("search")).toContainHTML("");
    fireEvent.input(inputElement, { target: { value: "123" } });
    expect(screen.queryByTestId("search")).toContainHTML("123");
  });
});
