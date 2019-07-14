import React from "react";

function Star(props) {
  const [imageSrc, setImageSrc] = React.useState("");

  async function fetchInfo() {
    let res = await fetch(
      `https://api.spotify.com/v1/search?q=${searchMusic}&type=artist&market=US&offset=5&limit=10`,
      {
        headers: {
          Authorization:
            "Bearer BQDjWtDrMmNi6JU2YujwAhk62vXkUQPriZQmdFHb5fBHiy7hMDC4xhG9Cp1d2cywEyYMSNDErHu1effjQq-DyWroHtW4Nnaf78DpdoDaSSDKB1o9N2lNhdoxJyjcwEyT0fLdaNSULnQ92tNe"
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

//export default Star;
