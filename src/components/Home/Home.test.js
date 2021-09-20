import React from "react";
import Home from "./Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Home renderd correctly with correct subcomponents", () => {
  const { getByTestId } = render(<Home />);
  const gradientEle = getByTestId("gradient");

  expect(gradientEle.textContent).toBe("");
});
