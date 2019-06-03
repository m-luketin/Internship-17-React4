import React from "react";

const Hexagon = props => {
  return (
    <>
      <div
        className="hex-top"
        style={{ borderBottomColor: props.color }}
      />
      <div
        className="hex-middle"
        style={{ backgroundColor: props.color }}
      />
      <div
        className="hex-bottom"
        style={{ borderTopColor: props.color }}
      />
    </>
  );
};

export default Hexagon;
