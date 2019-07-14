import React from "react";

function Search(props) {
  const [searchMusic, setSearchMusic] = React.useState("");
  const [searchList, setSearchList] = React.useState([""]);
  const [showStar, setShowStar] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");
  const [linkSrc, setLinkSrc] = React.useState("");

  async function handleInputChange(event) {
    //setSearchList([...searchList, value]);
    const value = event.target.value;
    setSearchMusic(value);

    try {
      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=5&limit=10`,
        {
          headers: {
            Authorization:
              "Bearer BQAY6kZzsYqqgdxPVUO4WTH6ApovTUNc2Ujp-VAHdOpRHl18SNVKR6WlUTlo20GwdNfF1chZoxcVyDRtvjKQ3eGfH4l2GE2Mz7LjeOja9N7hQnBRbv-ulKAc33li8YvfkH_-BJ0MBPZm7pOT"
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

  async function handleSearchClick(item) {
    setShowStar(item);

    try {
      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=5&limit=10`,
        {
          headers: {
            Authorization:
              "Bearer BQAY6kZzsYqqgdxPVUO4WTH6ApovTUNc2Ujp-VAHdOpRHl18SNVKR6WlUTlo20GwdNfF1chZoxcVyDRtvjKQ3eGfH4l2GE2Mz7LjeOja9N7hQnBRbv-ulKAc33li8YvfkH_-BJ0MBPZm7pOT"
          }
        }
      );
      let data = await res.json();
      let newFoundImage = await data.artists.items[0].images[1].url;
      let url = await data.artists.items[0].external_urls.spotify;
      setImageSrc(newFoundImage);
      setLinkSrc(url);
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  }

  function handleBackClick() {
    setShowStar(false);
  }

  if (showStar) {
    return (
      <div onClick={handleBackClick}>
        <h2>{searchList}</h2>
        {imageSrc && <img alt={searchList} src={imageSrc} />}
        <br />
        <a className="btn btn-success" href={linkSrc}>
          {searchList}
        </a>
      </div>
    );
  }

  return (
    <div className="form-group row">
      <div className="col-2" />
      <div className="form-group row col-8">
        <label htmlFor="inputMusic" className="col-2 col-form-label">
          Search
        </label>
        <input
          onChange={handleInputChange}
          className="form-control col-4"
          name="inputMusic"
          type="text"
        />
        <div className="row col-6">
          <div className="col" onClick={handleSearchClick}>
            {searchList}
          </div>
          <img id="picSize" className="col" alt={searchList} src={imageSrc} />
        </div>
      </div>

      <div className="col-2" />
    </div>
  );
}

export default Search;
