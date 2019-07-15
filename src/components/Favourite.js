import React from "react";

function Favourite({ favouriteItems }) {
  const items = favouriteItems.map((elem, index) => (
    <span key={elem + index} className="btn btn-success">
      {elem}
    </span>
  ));

  return <div>{items}</div>;
}

export default Favourite;
