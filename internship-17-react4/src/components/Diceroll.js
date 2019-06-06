import React, { Component } from "react";
import { connect } from "react-redux";
import { consts } from "../constants";

class Diceroll extends Component {
  render() {
    return (
      <div className="diceroll">
        <span>Roll: </span>
        <b
          className="roll-number" style={{ color: consts.players[this.props.state.player] }}
        >
          {this.props.state.diceroll}
        </b>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.player
});

export default connect(mapStateToProps)(Diceroll);
