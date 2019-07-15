import React from "react";
import PropTypes from "prop-types";

function Results({ artists }) {
  if (artists.length === 0) {
    return <div>Sorry, can't find anything...</div>;
  }

  return (
    <div>
      {artists.map(artist => (
        <div key={artist.id}>
          <img alt={artist.name} className="" src={artist.imageSrc} />
          {artist.name}
        </div>
      ))}
    </div>
  );
}

Results.propTypes = {
  artists: PropTypes.array.isRequired
};

export default Results;
