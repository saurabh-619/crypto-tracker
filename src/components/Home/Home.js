import CoinList from "../CoinList/CoinList";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CoinList />
      <div className="gradient" data-testid="gradient"></div>
    </div>
  );
};

export default Home;
