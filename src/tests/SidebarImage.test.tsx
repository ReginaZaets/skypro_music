import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "@components/Sidebar/Sidebar";
import ReduxProvider from "../store/ReduxProvider";
import { useRouter } from "next/navigation"; 


jest.mock("next/navigation");

test("renders the logo image", () => {
  const mockUseRouter = useRouter as jest.Mock;
  mockUseRouter.mockReturnValue({
    pathname: "/",
    push: jest.fn(),
  });
  render(
    <ReduxProvider>
      <Sidebar />
    </ReduxProvider>
  );
  expect(screen.getByAltText("Плейлист дня")).toBeInTheDocument();
});
