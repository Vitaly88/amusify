import React from "react";
import { doSearch } from "../utils/spotify";

function Search({ onArtistsChange }) {
  const [searchValue, setSearchValue] = React.useState(""); //den Wert eingeben
  //const [searchList, setSearchList] = React.useState(""); //Suchfunktion
  // const [showStar, setShowStar] = React.useState(""); //Info zeigen

  function handleInputChange(event) {
    //event.preventDefault();
    const lowerCaseValue = event.target.value.toLowerCase();
    setSearchValue(lowerCaseValue);
    console.log("handleInput", searchValue);
    // doSearch(searchValue).then(artists => {
    //   onArtistsChange(artists);
    // });
  }

  // setSearchMusic(value);
  // function handleBackClick() {
  //   setShowStar(false);
  // }

  // function handleFavClick() {
  //   return props.onToFav();
  // }

  // if (showStar) {
  //   return (
  //     <div className="form-group" onClick={handleBackClick}>
  //       <h2>{searchList}</h2>
  //       <br />
  //       {imageSrc && <img id="picSize" alt={searchList} src={imageSrc} />}
  //       <br />
  //       <br />
  //       <div className="row justify-content-center">
  //         <a className="btn btn-success mr-5" href={linkSrc}>
  //           You wanna listen to {searchList}?
  //         </a>

  //         <button className="btn btn-success" onClick={handleFavClick}>
  //           Add to your favourite artists
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="form-group row">
      <div className="col-2" />
      <div className="textSearch form-group row col-10 justify-content-center align-items-center">
        <label htmlFor="inputMusic" className="col-2 col-form-label ">
          Search
        </label>
        <input
          onChange={handleInputChange}
          className="form-control col-6"
          name="inputMusic"
          type="search"
          placeholder="surf your lovie-dovie singer..."
          value={searchValue}
        />
        {/* <div className="textSearch col-4" onClick={handleSearchClick}>
          {searchList}
        </div> */}
      </div>
    </div>
  );
}

export default Search;
