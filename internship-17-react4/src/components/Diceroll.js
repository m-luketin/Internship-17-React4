import React, { Component } from "react";
import { connect } from "react-redux";

class Diceroll extends Component {
  render() {
    return (
      <div className="diceroll">
        <span>Roll: </span>
        <b>{this.props.state.diceroll}</b>
        <br />
      </div>
    ); 
  }
}

const mapStateToProps = state => ({
  state: state.player
});


export default connect(mapStateToProps)(Diceroll);
