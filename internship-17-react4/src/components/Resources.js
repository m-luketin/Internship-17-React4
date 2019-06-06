import React from "react";
import {connect} from "react-redux";
import {consts} from "../constants";

const Resources = props => {
  return (
    <div className="resources" style={{backgroundColor: consts.players[props.playerState.player]}}>
      <span>Lumber: {props.state.lumber}</span>
      <span>Grain: {props.state.grain}</span>
      <span>Ore: {props.state.ore}</span> 
      <span>Wool: {props.state.wool}</span>
      <span>Brick: {props.state.brick}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.resources,
  playerState: state.player
});

export default connect(mapStateToProps)(Resources);