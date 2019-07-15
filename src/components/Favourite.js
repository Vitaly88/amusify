import React from "react";

function Favourite({ favouriteItems }) {
  const items = favouriteItems.map((elem, index) => (
    <span key={elem + index} className="btn btn-success mr-2">
      {elem}
    </span>
  ));

  return <div>{items}</div>;
}

export default Favourite;
