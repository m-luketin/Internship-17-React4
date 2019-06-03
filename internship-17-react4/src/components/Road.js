import React from "react";
import { connect } from "react-redux";
import { handleRoad } from "../redux/modules/board";

const Road = props => {
  return <div className={props.class} onClick={() => handleRoad()} />;
};

const mapStateToProps = state => ({
    state: state.board
  });
  
  const mapDispatchToProps = {
    handleRoad
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Road);