import React from "react";
import Search from "./components/Search";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Favourite from "./components/Favourite";
import { getFavFromStorage, setFavFromStorage } from "./utils/storage";
import Footer from "./components/Footer";
//import Header from "./components/Header";
import Logo from "./components/Logo";
import "./index.css";

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
      <Search />
      <Favourite onToFav={handleFavClick} favouriteItems={fav} />
      <footer>
        <Footer name="VitSolutions with Love ❤️" />
      </footer>
    </div>
  );
}

export default App;
