import React from "react";
import { connect } from "react-redux";
import { handleRoad } from "../redux/modules/board";

const Road = props => {
  return (
    <div
      className={props.class}
      style={{ backgroundColor: props.color }}
      onClick={() =>
        props.handleRoad(
          props.fieldNumber,
          props.roadNumber,
          props.coloredRoads,
          props.player.player
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  coloredRoads: state.board.coloredRoads,
  player: state.player
});

const mapDispatchToProps = {
  handleRoad
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Road);
