import React from "react";
import {connect} from "react-redux";
import {consts} from "../constants";

const Resources = props => {
  return (
    <div className="resources" style={{backgroundColor: consts.players[props.playerState.player]}}>
      <span>Lumber: {props.state.resources[props.playerState.player][0]}</span>
      <span>Grain: {props.state.resources[props.playerState.player][1]}</span>
      <span>Ore: {props.state.resources[props.playerState.player][2]}</span> 
      <span>Wool: {props.state.resources[props.playerState.player][3]}</span>
      <span>Brick: {props.state.resources[props.playerState.player][4]}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.resources,
  playerState: state.player
});

export default connect(mapStateToProps)(Resources);