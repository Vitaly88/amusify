import React from "react";

function Search(props) {
  const [searchMusic, setSearchMusic] = React.useState("");
  const [searchList, setSearchList] = React.useState([""]);
  const [showStar, setShowStar] = React.useState("");

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
              "Bearer BQACGn8-zp8-iwPHomiZ29T4NxIC7buHWQzIxIJkfWi3HZE3-iij9K-mOWrTRmes2IoqENqhiyfdhYKsi1V74CgMWal-B7j2k0ePCjsqhMJ4zg2oMpYe4zE4tiMuiHvQ_6JAp3tObvfAzlLZ"
          }
        }
      );
      let data = await res.json();
      const newFoundItem = data.artists.items[0].name;

      setSearchList([...searchList, newFoundItem]);
      console.log(searchList);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearchClick(item) {
    setShowStar(item);
  }

  function handleBackClick() {
    setShowStar(false);
  }

  //   React.useEffect(() => {
  //     handleInputChange();
  //   }, []);

  if (showStar) {
    return (
      <div>
        <img src={showStar} />
        <button onClick={handleBackClick}>Go back</button>
      </div>
    );
  }

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

        <div className="menu">
          {searchList
            .map((item, index) => (
              <div onClick={handleSearchClick} key={index}>
                {item}
              </div>
            ))
            .slice(0, 5)}
        </div>
      </div>
      <div className="col-md-4" />
    </div>
  );
}

export default Search;
