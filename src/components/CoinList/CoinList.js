import useSWR from "swr";
import { api_list_endpoint, fetcher } from "../../utils/api";
import moment from "moment";
import Loader from "../Loader/Loader";
import { useHookstate } from "@hookstate/core";
import { searchedData, totalData } from "../../state/store";
import { getSignedAndPrice, santitiseData } from "../../utils/helpers";
import { RefreshCcw as RefreshIcon } from "react-feather";
import { motion } from "framer-motion";
import {
  coinsWrapperVarient,
  fadeUpVarient,
  wrapperVarient,
} from "../../utils/animations";
import Coin from "./Coin";

const CoinList = () => {
  const totalDataState = useHookstate(totalData);
  const searchedDataState = useHookstate(searchedData);

  const { data, error, mutate, isValidating } = useSWR(
    api_list_endpoint,
    fetcher,
    {
      onSuccess: (data) => {
        data = santitiseData(data);
        totalDataState.set(data);
      },
    }
  );

  if (!data || isValidating) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const randerData = (coins) => {
    // const coins = santitiseData(data);
    return coins.map((coin, index) => {
      const { isSigned, price_perc_change } = getSignedAndPrice(coin);

      return (
        <Coin
          index={index}
          coin={coin}
          isSigned={isSigned}
          price_perc_change={price_perc_change}
        />
      );
    });
  };

  return (
    <motion.div
      className="coin-list"
      variants={wrapperVarient}
      initial="initial"
      animate="animate"
    >
      <motion.h4 variants={fadeUpVarient}>
        Top 100 Cryptocurrency Prices
      </motion.h4>
      <motion.h6 variants={fadeUpVarient}>
        updated{"   "}
        {moment(new Date(totalDataState.get()[0].last_updated)).fromNow()}
      </motion.h6>
      <motion.div className="coins" variants={coinsWrapperVarient}>
        {searchedDataState.get() === null ? (
          <div className="no-data">
            <h4>No data</h4>
          </div>
        ) : (
          randerData(
            searchedDataState.get().length
              ? searchedDataState.get()
              : totalDataState.get()
          )
        )}
      </motion.div>
      <div className="icon-wrapper" onClick={mutate}>
        <RefreshIcon color="#fff" size={35} />
      </div>
    </motion.div>
  );
};

export default CoinList;
