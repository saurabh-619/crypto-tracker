import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CoinList from "./CoinList";

test("CoinList renderd correctly", () => {
  const { getByTestId } = render(<CoinList />);
});
