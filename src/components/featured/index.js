import React from "react";
import Carrousel from "./Carousel";

const Featured = () => {
  return (
    <div style={{ position: "realtive" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
    </div>
  );
};

export default Featured;
