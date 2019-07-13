import React from "react";

function Search(props) {
  const [searchMusic, setSearchMusic] = React.useState();

  async function handleInputChange(event) {
    try {
      let res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=5&limit=10`,
        {
          headers: {
            Authorization:
              "Bearer BQChT5ckOmjqpqr7-8jwcCyXIog1_sCSgg33aLQFm-MdWHKKyb-l1p0VhvnADx_kQbEN6sWzfjUGwE0Ripk3NJX343ss1_Dfuf83mFlzMoaSbjJlbZxW3VijAgroNr-E7i6ilIqBXgfA36a7"
          }
        }
      );
      let data = await res.json();
      console.log(data.artists.items[0].name);
      // props.onSearchChange(artists.items[0].name);

    //   const value = await setSearchMusic(event.target.value);

    //   if (value !== "") {
    //     props.onSearchChange();
    //   } else {
    //     props.onSearchChange([]);
    //   }
    // } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="form-group row">
      <div className="col-md-4" />
      <div className="form-group row col-md-4">
        <label for="inputMusic" className="col-md-3 col-form-label">
          Search
        </label>
        <input
          onChange={handleInputChange}
          className="form-control col-md-9"
          type="text"
          id="inputMusic"
        />
      </div>
      <div className="col-md-4" />
    </div>
  );
}

export default Search;
