import React from "react";
import { connect } from "react-redux";
import { handlePlayers } from "../redux/modules/player";
import {consts} from "../constants";

const Player = props => {
  return (
    <div className="player">
      Current player is{" "}
      <span style={{ color: consts.players[props.state.player] }}>{consts.players[props.state.player]}</span>
      <button onClick={() => props.handlePlayers(props.state.player)}>Next player</button>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.player
});


const mapDispatchToProps = {
  handlePlayers
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
