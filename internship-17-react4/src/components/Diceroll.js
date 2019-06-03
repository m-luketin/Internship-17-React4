import React, { Component } from "react";
import { connect } from "react-redux";

class Diceroll extends Component {
  render() {
    return (
      <div className="diceroll">
        <span>Roll: </span>
        {this.props.state.firstDice} + {this.props.state.secondDice}
        <span> = </span>
        {this.props.state.firstDice + this.props.state.secondDice}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.diceroll
});

export default connect(mapStateToProps)(Diceroll);
