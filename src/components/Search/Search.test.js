import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";

const { getByTestId } = render(<Search />);
const searchComponent = getByTestId("search-page");

describe("Search component", () => {
  test("Search component mounted correctly", () => {
    expect(searchComponent).toBeInTheDocument();
  });
});
