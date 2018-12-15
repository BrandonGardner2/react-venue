import React from "react";
import Carrousel from "./Carousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "realtive" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>

      <TimeUntil />
    </div>
  );
};

export default Featured;
