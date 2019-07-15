import React from "react";

function Search(props) {
  const [searchMusic, setSearchMusic] = React.useState(null);
  const [searchList, setSearchList] = React.useState("");
  const [showStar, setShowStar] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");
  const [linkSrc, setLinkSrc] = React.useState("");

  async function handleInputChange(event) {
    try {
      const value = event.target.value;
      if (value) {
        setSearchMusic(value);
      }

      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=20&limit=10`,
        {
          headers: {
            Authorization:
              "Bearer BQDrFHTkDFEchBZbPIP4tuU4WouMG2Xgf0vrnNNlohLXncZZ84_W0iMchbKAg12jFoELL_XTP2utMyoxIBM2voBlSA-LMQ74EyMDGzDU9lWsJWQRwahfi8qtrjk2Py2wiY6wC7ocwXxBt1aa"
          }
        }
      );
      let data = await res.json();
      const newFoundItem = data.artists.items[0].name;
      if (newFoundItem) {
        setSearchList(newFoundItem);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearchClick(event) {
    try {
      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=20&limit=10`,
        {
          headers: {
            Authorization:
              "Bearer BQDrFHTkDFEchBZbPIP4tuU4WouMG2Xgf0vrnNNlohLXncZZ84_W0iMchbKAg12jFoELL_XTP2utMyoxIBM2voBlSA-LMQ74EyMDGzDU9lWsJWQRwahfi8qtrjk2Py2wiY6wC7ocwXxBt1aa"
          }
        }
      );
      let data = await res.json();
      let newFoundImage = await data.artists.items[0].images[1].url;
      let url = await data.artists.items[0].external_urls.spotify;

      if (newFoundImage) {
        setImageSrc(newFoundImage);
      }
      if (url) {
        setLinkSrc(url);
      }
      if (searchList) {
        setShowStar(searchList);
      }
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  }

  function handleBackClick() {
    setShowStar(false);
  }

  function handleFavClick() {
    return props.onToFav(searchList);
  }

  if (showStar) {
    return (
      <div onClick={handleBackClick}>
        <h2>{searchList}</h2>
        <br />
        {imageSrc && <img id="picSize" alt={searchList} src={imageSrc} />}
        <br />
        <br />
        <br />
        <div className="row justify-content-center">
          <a className="btn btn-success mr-5" href={linkSrc}>
            You wanna listen to {searchList}?
          </a>

          <button className="btn btn-success" onClick={handleFavClick}>
            Add to your favourite artists
          </button>
        </div>
      </div>
    );
  }

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
          type="text"
          placeholder="surf your lovie-dovie singer..."
        />
        <div className="textSearch col-4" onClick={handleSearchClick}>
          {searchList}
        </div>
      </div>
    </div>
  );
}

export default Search;
