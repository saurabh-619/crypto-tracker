import { totalData, searchedData } from "../state/store";
import {
  santitiseData,
  getSignedAndPrice,
  getSearchResults,
} from "../utils/helpers";

// Sanitise function
test("Check the Type of Sanitise function", () => {
  expect(santitiseData([])).not.toBeNull();
});

// check if the given number is signed or not
test("Check the Types issigned and price_perc", () => {
  const coin = { price_change_24h: -3.1 };
  expect(getSignedAndPrice(coin)).toEqual(
    expect.objectContaining({
      isSigned: expect.any(Boolean),
      price_perc_change: expect.any(String),
    })
  );
  expect(getSignedAndPrice(coin)).toEqual({
    isSigned: true,
    price_perc_change: "3.10",
  });
});

// Check search data
test("Check the searched data", () => {
  const coins = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      current_price: 48307,
      market_cap: 910055723882,
      price_change_24h: 2.06197,
      last_updated: "2021-09-18T19:17:46.450Z",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      current_price: 3446.97,
      market_cap: 405868350458,
      price_change_24h: 1.31171,
      last_updated: "2021-09-18T19:18:11.195Z",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
      current_price: 2.37,
      market_cap: 76151056599,
      price_change_24h: 0.8303,
      last_updated: "2021-09-18T19:18:18.713Z",
    },
    {
      id: "tether",
      symbol: "usdt",
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      current_price: 1,
      market_cap: 69492013053,
      price_change_24h: -0.31362,
      last_updated: "2021-09-18T19:16:15.560Z",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "Binance Coin",
      image:
        "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
      current_price: 412.1,
      market_cap: 63817729838,
      price_change_24h: 0.36592,
      last_updated: "2021-09-18T19:17:54.193Z",
    },
  ];

  expect(getSearchResults(coins, "saurabh")).toStrictEqual(expect.any(Array));
  expect(getSearchResults(coins, "bitcoin")).toEqual([
    {
      current_price: 48307,
      id: "bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      last_updated: "2021-09-18T19:17:46.450Z",
      market_cap: 910055723882,
      name: "Bitcoin",
      price_change_24h: 2.06197,
      symbol: "btc",
    },
  ]);
});

// Store
test("Check the values of the store", () => {
  expect(totalData.get()).not.toBeNull();
  expect(typeof totalData.get()).toBe("object");

  expect(searchedData.get()).not.toBeNull();
  expect(typeof searchedData.get()).toBe("object");
});
