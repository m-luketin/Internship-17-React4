import React from "react";
import { utils } from "../utils";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="player-signup">
      <h2>Enter players:</h2>
        <input
          type="text"
          class="player-one"
          required
          value="Player 1"
        />
        <input
          type="text"
          class="player-two"
          required
          value="Player 2"
        />
        <input
          type="text"
          class="player-three"
          required
          value="Player 3"
        />
        <input
          type="text"
          class="player-four"
          required
          value="Player 4"
        />
        <Link to="/game" className="start-button">
          START
        </Link>
    </div>
  );
};

export default Signup;
