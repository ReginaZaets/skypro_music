import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ReduxProvider from "../store/ReduxProvider";

import Bar from "@components/Bar/Bar";

test("tracks", () => {
  render(
    <ReduxProvider>
      <Bar />
    </ReduxProvider>
  );
  expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
});
