import React from "react";
import { connect } from "react-redux";

const Player = props => {
  return (
    <div className="player">
      Current player is <span style={{color: props.state.player}}>{props.state.player}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.player
});

export default connect(mapStateToProps)(Player);
