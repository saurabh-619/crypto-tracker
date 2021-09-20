import { useHookstate } from "@hookstate/core";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Search as SearchIcon } from "react-feather";
import { XCircle as CloseIcon } from "react-feather";
import { searchedData, totalData } from "../../state/store";
import {
  fadeUpVarientInput,
  fadeUpVarientSearch,
} from "../../utils/animations";
import { getSearchResults } from "../../utils/helpers";

const Search = () => {
  const totalDataState = useHookstate(totalData);
  const [openInput, setOpenSearch] = useState(false);

  const handleSearchText = (search) => {
    if (search.trim().length === 0) {
      searchedData.set([]);
    } else {
      const results = getSearchResults(totalDataState.get(), search);
      searchedData.set(results.length ? results : null);
    }
  };

  return (
    <div className="search" data-testid="search-page">
      <AnimatePresence initial={false}>
        {!openInput && (
          <motion.div
            variants={fadeUpVarientSearch}
            initial="initial"
            animate="animate"
            exit="exit"
            className="search-icon-wrapper"
            data-testid="search-icon"
          >
            <SearchIcon
              color="#fff"
              size={25}
              onClick={() => setOpenSearch(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {openInput && (
          <motion.div
            className="input-wrapper"
            variants={fadeUpVarientInput}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <input
              type="text"
              placeholder="Search your favourite coin..."
              autoFocus
              onChange={(e) => {
                handleSearchText(e.target.value);
              }}
            />
            <CloseIcon
              color="#cc16ec"
              onClick={() => {
                handleSearchText("");
                setOpenSearch(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
