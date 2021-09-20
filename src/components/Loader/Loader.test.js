import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from "./Loader";

test("Loader renderd correctly", () => {
  const { getByTestId } = render(<Loader />);

  const loaderWrapper = getByTestId("loader-wrapper");
  expect(loaderWrapper).toBeInTheDocument();
});
