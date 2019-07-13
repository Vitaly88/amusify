import React from "react";
import Search from "./components/Search";
import Star from "./components/Star";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <h1>Amusify</h1>
      <br />
      <Search />
      <Star showStar={showStar} />
    </div>
  );
}

export default App;
