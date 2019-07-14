import React from "react";

function Search(props) {
  const [searchMusic, setSearchMusic] = React.useState("");
  const [searchList, setSearchList] = React.useState("");
  const [showStar, setShowStar] = React.useState("");
  const [imageSrc, setImageSrc] = React.useState("");

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
              "Bearer BQC-UTKgMvKHAOHYVhTraJlMC-Y2IxGr6IKwr2cT5loFVNwokl1pdI5cEca5yE0HaOyunw3KMT9SyHRDIUo7JlFzagQL1lS04Ismgg8730slPzzBRTU-wvk9paj2teuws5oKiD3-QImKSzS4"
          }
        }
      );
      let data = await res.json();
      const newFoundItem = data.artists.items[0].name;
      setSearchList(newFoundItem);
      let newFoundImage = await data.artists.items[0].images[1].url;
      setImageSrc(newFoundImage);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearchClick(item) {
    setShowStar(item);
  }

  //   function handleBackClick() {
  //     setShowStar(false);
  //   }

  return (
    <div className="form-group row">
      <div className="col-md-4" />
      <div className="form-group row col-md-4">
        <label htmlFor="inputMusic" className="col-md-3 col-form-label">
          Search
        </label>
        <input
          onChange={handleInputChange}
          className="form-control col-md-9 dropdown-toggle"
          name="inputMusic"
          type="text"
        />
        <br />
        <br />
        <br />
        <div className="form-group row justify-content-right align-items-center">
          <div className="col-9" onClick={handleSearchClick}>
            {searchList}
          </div>
          <img id="picSize" className="col-3" alt={searchList} src={imageSrc} />
        </div>
      </div>
      <div className="col-md-4" />
    </div>
  );
}

export default Search;
