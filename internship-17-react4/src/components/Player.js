import React from "react";
import { connect } from "react-redux";
import { handlePlayers } from "../redux/modules/player";
import { consts } from "../constants";

const Player = props => {
  return (
    <div className="player">
      Current player is{" "}
      <span style={{ color: consts.players[props.playerState.player] }}>
        {props.playerState.playerNames[props.playerState.player]}
      </span>
      <br />
      <button
        className="next-turn"
        onClick={() =>
          props.handlePlayers(
            props.playerState.player,
            props.playerState.setup,
            props.resourceState.resources,
            props.boardState.fieldTerrains,
            props.boardState.fieldNumbers,
            props.boardState.coloredCrossroads,
            props.playerState.settlements,
            props.playerState.cities,
            props.playerState.playerNames
          )
        }
        style={{ backgroundColor: consts.players[props.playerState.player] }}
      >
        END TURN
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  playerState: state.player,
  setupState: state.setup,
  boardState: state.board,
  resourceState: state.resources
});

const mapDispatchToProps = {
  handlePlayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
