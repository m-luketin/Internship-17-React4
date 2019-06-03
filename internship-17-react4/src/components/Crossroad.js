import React from "react";
import { connect } from "react-redux";
import { handleCrossroad } from "../redux/modules/board";

const Crossroad = props => {
  return <div className={props.class} style={{color: props.color}}onClick={ () => handleCrossroad(props.fieldNumber, props.crossroadNumber)} />;
};

const mapStateToProps = state => ({
  state: state.board
});

const mapDispatchToProps = {
  handleCrossroad
};

export default connect(mapStateToProps, mapDispatchToProps)(Crossroad);
