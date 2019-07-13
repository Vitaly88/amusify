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
              "Bearer BQBqK16Fw7Eg9K2Vy2XsWO9Hs_U02tofVKdUQNOdKsOFalaxcYngb9QwtO1WyQ7k_KXN2STc9dzhv2L6SKoMbUFnsFf64Vjzt9yeyiOjRMjdKRvqk7jNxprhc50tHgc8NPkt4TTIhkZyQ1NK"
          }
        }
      );
      let data = await res.json();
      const newFoundItem = data.artists.items[0].name;

      setSearchList([...searchList, newFoundItem]);
      //console.log(searchList);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearchClick() {
    setShowStar();
  }

  //   React.useEffect(() => {
  //     handleInputChange();
  //   }, []);

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
