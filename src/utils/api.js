export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const api_list_endpoint =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";
