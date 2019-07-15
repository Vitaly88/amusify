import React from "react";
import Search from "./components/Search";
import Favourite from "./components/Favourite";
import { getFavFromStorage, setFavFromStorage } from "./utils/storage";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function App() {
  const [fav, setFav] = React.useState(getFavFromStorage());
  React.useEffect(() => {
    setFavFromStorage(fav);
  }, [fav]);

  function handleFavClick(favName) {
    const newFav = [favName, ...fav].slice(0, 11);
    setFav(newFav);
    setFavFromStorage(newFav);
  }
  return (
    <div className="container">
      <Logo />
      <br />
      <br />
      <Favourite favouriteItems={fav} />
      <br />
      <button className="btn btn-success" onClick={() => setFav([])}>
        Clean my favourites
      </button>
      <br />
      <Search onAddToFav={handleFavClick} />
      <br />
      <footer>
        <Footer name="VitSolutions with Love ❤️" />
      </footer>
    </div>
  );
}

export default App;
