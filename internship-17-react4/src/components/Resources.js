import React from "react";
import {connect} from "react-redux";

const Resources = props => {
  return (
    <div className="resources">
      <span>Lumber: {props.state.lumber}</span>
      <span>Grain: {props.state.grain}</span>
      <span>Ore: {props.state.ore}</span> 
      <span>Wool: {props.state.wool}</span>
      <span>Brick: {props.state.brick}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.resources
});

export default connect(mapStateToProps)(Resources);