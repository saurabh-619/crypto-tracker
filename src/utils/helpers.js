export const santitiseData = (data) => {
  return data.map((d) => ({
    id: d.id,
    symbol: d.symbol,
    name: d.name,
    image: d.image,
    current_price: d.current_price,
    market_cap: d.market_cap,
    price_change_24h: d.price_change_percentage_24h,
    last_updated: d.last_updated,
  }));
};

export const getSignedAndPrice = (coin) => {
  const isSigned = coin.price_change_24h.toString().includes("-");
  const price_perc_change = isSigned
    ? coin.price_change_24h.toPrecision(3).split("-")[1]
    : coin.price_change_24h.toPrecision(3);

  return { isSigned, price_perc_change };
};

export const getSearchResults = (coins, search) => {
  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search) ||
      coin.id.toLowerCase().includes(search)
  );
};
