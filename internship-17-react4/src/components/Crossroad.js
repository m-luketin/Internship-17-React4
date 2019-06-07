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
          props.player.player,
          props.player.setup,
          props.resources.resources,
          props.player.settlements,
          props.coordinates,
          props.fieldCoordinates,
          props.fields
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  coloredCrossroads: state.board.coloredCrossroads,
  player: state.player,
  fields: state.board.fieldTerrains,
  resources: state.resources
});

const mapDispatchToProps = {
  handleCrossroad
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crossroad);
