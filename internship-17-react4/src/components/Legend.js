import React from "react";

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-primary">
        <div>
          <span
            style={{
              backgroundColor: "ForestGreen",
              color: "ForestGreen",
              border: "1.75px solid black"
            }}
          >
            __
          </span>
          <span className="legend-text"> - Forest </span>
          <span>(Lumber)</span>
        </div>
        <div>
          <span
            style={{
              backgroundColor: "GoldenRod",
              color: "GoldenRod",
              border: "1.75px solid black"
            }}
          >
            __
          </span>
          <span className="legend-text"> - Fields </span>
          <span>(Grain)</span>
        </div>
        <div>
          <span
            style={{
              backgroundColor: "DimGrey",
              color: "DimGrey",
              border: "1.75px solid black"
            }}
          >
            __
          </span>
          <span className="legend-text"> - Mountains </span>
          <span>(Ore)</span>
        </div>
        <div>
          <span
            style={{
              backgroundColor: "LawnGreen",
              color: "LawnGreen",
              border: "1.75px solid black"
            }}
          >
            __
          </span>
          <span className="legend-text"> - Pasture </span>
          <span>(Wool)</span>
        </div>
        <div>
          <span
            style={{
              backgroundColor: "Sienna",
              color: "Sienna",
              border: "1.75px solid black"
            }}
          >
            __
          </span>
          <span className="legend-text"> - Hills </span>
          <span>(Brick)</span>
        </div>
        <div>
          <span
            style={{
              backgroundColor: "SandyBrown",
              color: "SandyBrown",
              border: "1.75px solid black"
            }}
          >
            __
          </span>
          <span className="legend-text"> - Desert </span>
          <span />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="legend-secondary">
        <div className="legend-build">
          <span>Settlement = 1 Lumber </span>
          <div className="build-container">
            <span>+ 1 Grain</span>
          </div>
          <div className="build-container">
            <span>+ 1 Wool</span>
          </div>
          <div className="build-container">
            <span>+ 1 Brick</span>
          </div>
        </div>
        <div className="legend-build">
          <span>Road = 1 Lumber</span>
          <div className="build-container">
            <span>+ 1 Brick</span>
          </div>
        </div>
        <div className="legend-build">
          <span>City = 2 Grain	&nbsp;	&nbsp;</span>
          <div className="build-container">
            <span>+ 3 Ore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
