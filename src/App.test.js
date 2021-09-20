import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const { getByTestId } = render(<App />);

test("App component rendered", () => {
  const appComponent = getByTestId("app");
  expect(appComponent).toBeInTheDocument();
});
