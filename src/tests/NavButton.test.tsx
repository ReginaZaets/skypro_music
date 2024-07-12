import "@testing-library/jest-dom";

import Header from "@components/Header/Header";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ReduxProvider from "../store/ReduxProvider";
import { useRouter } from "next/navigation"; 

jest.mock("next/navigation"); 


describe("меню", () => {
  test("список", async () => {
    const mockUseRouter = useRouter as jest.Mock;
    mockUseRouter.mockReturnValue({
      pathname: "/", 
      push: jest.fn(),
    });

    render(
      <ReduxProvider>
        <Header />
      </ReduxProvider>
    );
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  test("бургер", async () => {
    const mockUseRouter = useRouter as jest.Mock;
    mockUseRouter.mockReturnValue({
      pathname: "/", 
      push: jest.fn(),
    });
    render(
      <ReduxProvider>
        <Header />
      </ReduxProvider>
    );

    const toggleBurger = screen.getByTestId("burger");
    fireEvent.click(toggleBurger);

  
    await waitFor(() => {
      expect(screen.getByRole("list")).toBeInTheDocument();
    });


    fireEvent.click(toggleBurger);


    await waitFor(() => {
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
  });
});
