import { motion } from "framer-motion";
import { fadeUpVarient } from "../../utils/animations";

const Coin = ({ index, coin, isSigned, price_perc_change }) => {
  return (
    <motion.div
      key={coin.id}
      className={`coin ${index === 0 && "first-coin"}`}
      variants={fadeUpVarient}
    >
      <div className="left">
        <h4 data-testid="indexOfCoin">{index + 1}.</h4>
        <img
          src={coin.image}
          alt={coin.symbol + "-img"}
          data-testid="coinImage"
        />
        <div className="name-wrapper">
          <h4>{coin.symbol.toUpperCase()}</h4>
          <h5>{coin.name}</h5>
        </div>
      </div>
      <div className="right">
        <h4>${coin.current_price}</h4>
        <h4
          className={isSigned ? "price-dec" : "price-inc"}
          data-testid="coinPriceChange"
        >
          {isSigned ? "-" : "+"}
          {price_perc_change}%
        </h4>
        <h4>${(coin.market_cap / 1000000000).toPrecision(4)}B</h4>
      </div>
    </motion.div>
  );
};

export default Coin;
