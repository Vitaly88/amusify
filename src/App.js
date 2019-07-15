import React from "react";
import Search from "./components/Search";
// import Favourite from "./components/Favourite";
// import { getFavFromStorage, setFavFromStorage } from "./utils/storage";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Results from "./components/Results";

function App() {
  const [artists, setArtists] = React.useState([]);
  // const [fav, setFav] = React.useState(getFavFromStorage());

  // React.useEffect(() => {
  //   setFavFromStorage(fav);
  // }, [fav]);

  // function handleFavClick(favName) {
  //   const newFav = [favName, ...fav].slice(0, 11);
  //   setFav(newFav);
  //   setFavFromStorage(newFav);
  // }

  function handleArtistsChange(newArtists) {
    setArtists(newArtists);
  }
  return (
    <div className="container">
      <Logo />
      <br />
      <br />
      {/* <Favourite onToFav={handleFavClick} favouriteItems={fav} /> */}
      <Search onArtistsChange={handleArtistsChange} />
      <Results artists={artists} />

      <footer>
        <Footer name="VitSolutions with Love ❤️" />
      </footer>
    </div>
  );
}

export default App;
