import { motion } from "framer-motion";
import { fadeUpVarient } from "../../utils/animations";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      variants={fadeUpVarient}
      initial="initial"
      animate="animate"
    >
      <h2 data-testid="logo">Ct.</h2>
      <Search />
    </motion.div>
  );
};

export default Navbar;
