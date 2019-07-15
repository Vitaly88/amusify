export function doSearch(searchValue) {
  return fetch(
    `https://api.spotify.com/v1/search?query=${searchValue}*&type=artist&market=US&offset=0&limit=20`,
    {
      headers: {
        Authorization:
          "Bearer BQCDJLq1N9Jm3faonOKWix93PaSHtO_t71ahRDGYiG1CfUoyyEx3S2zfGQ3oACuv64DrMm3emq2Qslm-9AVWz6pUdwIPH0DQDIpf7FudE7VNKjDtfkqNTQjLtgrePf6NeGvYfFTZYpW6YGM0"
      }
    }
  )
    .then(response => response.json())
    .then(result => {
      const artists = result.artists.items.map(item => {
        return {
          id: item.id,
          name: item.name,
          //urlSrc: item.external_urls.spotify,
          imageSrc: item.images[1]
            ? item.images[1].url
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2000px-No_image_available.svg.png"
        };
      });
      return artists;
    });
}
