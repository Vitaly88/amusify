import React from "react";

function Search({ onAddToFav }) {
  const [searchMusic, setSearchMusic] = React.useState("");
  const [searchList, setSearchList] = React.useState("");
  const [showStar, setShowStar] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");
  const [linkSrc, setLinkSrc] = React.useState("");

  function handleInputChange(event) {
    const value = event.target.value;
    setSearchMusic(value);
  }

  async function doSearch() {
    try {
      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=0&limit=50`,
        {
          headers: {
            Authorization:
              "Bearer BQBCKV9m1Spt2ErBiWyfZM7YpIICR1BHQrk4GMktl4qc92XS9xat44nReRIRQhtiD7dvGTkooa7K2j0NwESNsXwGOTGO5TzVrtnCpG-AaFVzFCcv1r9kvuNN1PSU1ZeCvAnZZpPp0PZgw4La"
          }
        }
      );
      let data = await res.json();
      const newFoundItem = data.artists.items[0].name;
      setSearchList(newFoundItem);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    doSearch();
  }, [searchMusic]);

  async function handleSearchClick(searchList) {
    setShowStar(searchList);
    try {
      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=0&limit=50`,
        {
          headers: {
            Authorization:
              "Bearer BQA4dyRRMymUvMkbibmvwLTfTeF4eUaDhjWb4M40_316kOwWFegM6q_S7UC-bZmDjCe4eZrm0AFUadHPe1_jriGV9JrBjcrzooskw0QZbMA6nwBAuNK1izsHoGoQPuG7QLj_RuyEe_gvQw6-"
          }
        }
      );
      let data = await res.json();
      let newFoundImage = await data.artists.items[0].images[1].url;
      let url = await data.artists.items[0].external_urls.spotify;

      setImageSrc(newFoundImage);
      setLinkSrc(url);

      //console.log(url);
    } catch (err) {
      console.log(err);
    }
  }

  // React.useEffect(() => {
  //   handleSearchClick();
  // }, []);

  function handleBackClick() {
    setShowStar(false);
  }

  if (showStar) {
    return (
      <div className="form-group" onClick={handleBackClick}>
        <h2>{searchList}</h2>
        <br />
        {imageSrc && <img id="picSize" alt={searchList} src={imageSrc} />}
        <br />
        <br />
        <div className="row justify-content-center">
          <a className="btn btn-success mr-5" href={linkSrc}>
            You wanna listen to {searchList}?
          </a>
          <div
            className="btn btn-success"
            onClick={() => {
              onAddToFav(searchList);
            }}
          >
            Add to your favourite artists
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-group row">
      <div className="textSearch form-group row col justify-content-center align-items-center">
        <label htmlFor="inputMusic" className="col-3 col-form-label ">
          Search
        </label>
        <input
          onChange={handleInputChange}
          className="form-control col-6"
          name="inputMusic"
          type="text"
          placeholder="surf your lovie-dovie singer..."
        />
        <div className="textSearch col-3" onClick={handleSearchClick}>
          {searchList}
        </div>
      </div>
    </div>
  );
}

export default Search;
