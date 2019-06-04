import React from "react";
import { connect } from "react-redux";
import { handlePlayers } from "../redux/modules/player";
import { consts } from "../constants";

const Player = props => {
  return (
    <div className="player">
      <button
        className="next-turn"
        onClick={() =>
          props.handlePlayers(props.playerState.player, props.playerState.setup)
        }
        style={{ backgroundColor: consts.players[props.playerState.player] }}
      >
        END TURN
      </button>
        <br />
      Current player is{" "}
      <span style={{ color: consts.players[props.playerState.player] }}>
        {consts.players[props.playerState.player]}
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  playerState: state.player,
  setupState: state.setup
});

const mapDispatchToProps = {
  handlePlayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
