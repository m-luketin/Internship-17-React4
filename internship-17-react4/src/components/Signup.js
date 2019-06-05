import React from "react";
import {handlePlayerNames, randomizePlayers} from "../redux/modules/player";
import { Link } from "react-router-dom";
import {connect} from "react-redux";

const Signup = (props) => {
  return (
    <div className="player-signup">
      <h2>Enter players:</h2>
        <input
          type="text"
          class="player-one"
          id="player-one"
          required
          placeholder="Player 1"
          onKeyUp={() => props.handlePlayerNames(document, 0, props.playerNameState)}
        />
        <input
          type="text"
          class="player-two"
          id="player-two"
          required
          placeholder="Player 2"
          onKeyUp={() => props.handlePlayerNames(document, 1, props.playerNameState)}
        />
        <input
          type="text"
          class="player-three"
          id="player-three"
          required
          placeholder="Player 3"
          onKeyUp={() => props.handlePlayerNames(document, 2, props.playerNameState)}
          />
        <input
          type="text"
          class="player-four"
          id="player-four"
          required
          placeholder="Player 4"
          onKeyUp={() => props.handlePlayerNames(document, 3, props.playerNameState)}
          />
          <span className="signup-randomised">(colors will be randomised)</span>
        <Link to="/game" className="start-button" onClick={() => props.randomizePlayers(props.playerNameState)}>
          START
        </Link>
    </div>
  );
};

const mapStateToProps = state => ({
    playerNameState: state.player
  });

const mapDispatchToProps = ({
    handlePlayerNames,
    randomizePlayers
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);