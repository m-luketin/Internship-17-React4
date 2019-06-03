import React from "react";
import { connect } from "react-redux";
import { handleCrossroad } from "../redux/modules/board";

const Crossroad = props => {
  return (
    <div
      className={props.class}
      style={{ backgroundColor: props.color }}
      onClick={() =>
        props.handleCrossroad(
          props.fieldNumber,
          props.crossroadNumber,
          props.coloredCrossroads,
          props.player.player
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  coloredCrossroads: state.board.coloredCrossroads,
  player: state.player
});

const mapDispatchToProps = {
  handleCrossroad
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crossroad);
