import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Coin from "./Coin";
import { getSignedAndPrice } from "../../utils/helpers";

const coin = {
  current_price: 47562,
  id: "bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  last_updated: "2021-09-19T20:25:37.239Z",
  market_cap: 895127243804,
  name: "Bitcoin",
  price_change_24h: -0.93269,
  symbol: "btc",
};
const { isSigned, price_perc_change } = getSignedAndPrice(coin);

const { getByTestId } = render(
  <Coin
    index={1}
    coin={coin}
    isSigned={isSigned}
    price_perc_change={price_perc_change}
  />
);
const coinIndex = getByTestId("indexOfCoin");
const coinImage = getByTestId("coinImage");
const coinPriceChange = getByTestId("coinPriceChange");

describe("Coin component", () => {
  test("Check Coin's index", () => {
    expect(coinIndex.textContent).toBe("2.");
  });

  test("check coin's image src", () => {
    expect(coinImage).toHaveAttribute(
      "src",
      expect.stringContaining("https://assets.coingecko.com/coins/images/")
    );
  });

  test("check coin price change's sign", () => {
    expect(
      coinPriceChange.textContent.toString().includes("+") ||
        coinPriceChange.textContent.toString().includes("-")
    ).toBeTruthy();
  });
});
