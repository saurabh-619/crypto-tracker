import SyncLoader from "react-spinners/SyncLoader";

const Loader = () => {
  return (
    <div className="loader" data-testid="loader-wrapper">
      <SyncLoader size={10} color="#d900ff" data-testid="loader" />
    </div>
  );
};

export default Loader;
