import React from "react";

function Star(props) {
  const [imageSrc, setImageSrc] = React.useState("");

  async function fetchInfo() {
    let res = await fetch(
      `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=5&limit=10`,
      {
        headers: {
          Authorization:
            "Bearer BQBqK16Fw7Eg9K2Vy2XsWO9Hs_U02tofVKdUQNOdKsOFalaxcYngb9QwtO1WyQ7k_KXN2STc9dzhv2L6SKoMbUFnsFf64Vjzt9yeyiOjRMjdKRvqk7jNxprhc50tHgc8NPkt4TTIhkZyQ1NK"
        }
      }
    );
    const star = await res.json();

    if (star.artists.items[0].images[0]) {
      setImageSrc(star.artists.items[0].images[0]);
    }
  }

  React.useEffect(() => {
    fetchInfo();
  }, [props.star]);

  return <img src={imageSrc} />;
}

export default Star;
