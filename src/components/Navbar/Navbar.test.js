import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

test("Navbar logo rendered correctly", () => {
  const { getByTestId } = render(<Navbar />);
  expect(getByTestId("logo").textContent).toBe("Ct.");
});
