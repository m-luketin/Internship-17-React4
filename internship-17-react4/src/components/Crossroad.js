import React from "react";
import { connect } from "react-redux";
import { handleCrossroad } from "../redux/modules/board";

const Crossroad = props => {
  return (
    <div
      className={props.class}
      style={Object.assign(
        {},
        { backgroundColor: props.color },
        {
          ...props.cityState[props.fieldNumber][props.crossroadNumber]
            ? { borderRadius: "0" }
            : { borderRadius: "50%" }
        }
      )}
      onClick={() =>
        props.handleCrossroad(
          props.fieldNumber,
          props.crossroadNumber,
          props.coloredCrossroads,
          props.player.player,
          props.player.setup,
          props.resources.resources,
          props.player.settlements,
          props.cityState,
          props.player.cities
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  coloredCrossroads: state.board.coloredCrossroads,
  player: state.player,
  fields: state.board.fieldTerrains,
  resources: state.resources,
  cityState: state.board.crossroadCities
});

const mapDispatchToProps = {
  handleCrossroad
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crossroad);
