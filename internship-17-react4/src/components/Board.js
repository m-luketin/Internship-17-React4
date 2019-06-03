import React, { Component } from "react";
import Field from "./Field";
import { connect } from "react-redux";

class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="field-row">
          <Field
            number={0}
            coordinates={[0, -2, 2]}
            value={this.props.state.fieldNumbers[0]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[0]}
            fieldRoadColors={this.props.state.coloredRoads[0]}
            terrain={this.props.state.fieldTerrains[0]}
          />
          <Field
            number={1}
            coordinates={[1, -2, 1]}
            value={this.props.state.fieldNumbers[1]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[1]}
            fieldRoadColors={this.props.state.coloredRoads[1]}
            terrain={this.props.state.fieldTerrains[1]}
          />
          <Field
            number={2}
            coordinates={[2, -2, 0]}
            value={this.props.state.fieldNumbers[2]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[2]}
            fieldRoadColors={this.props.state.coloredRoads[2]}
            terrain={this.props.state.fieldTerrains[2]}
          />
        </div>
        <div className="field-row">
          <Field
            number={3}
            coordinates={[-1, -1, 2]}
            value={this.props.state.fieldNumbers[3]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[3]}
            fieldRoadColors={this.props.state.coloredRoads[3]}
            terrain={this.props.state.fieldTerrains[3]}
          />
          <Field
            number={4}
            coordinates={[0, -1, 1]}
            value={this.props.state.fieldNumbers[4]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[4]}
            fieldRoadColors={this.props.state.coloredRoads[4]}
            terrain={this.props.state.fieldTerrains[4]}
          />
          <Field
            number={5}
            coordinates={[1, -1, 0]}
            value={this.props.state.fieldNumbers[5]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[5]}
            fieldRoadColors={this.props.state.coloredRoads[5]}
            terrain={this.props.state.fieldTerrains[5]}
          />
          <Field
            number={6}
            coordinates={[2, -1, -1]}
            value={this.props.state.fieldNumbers[6]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[6]}
            fieldRoadColors={this.props.state.coloredRoads[6]}
            terrain={this.props.state.fieldTerrains[6]}
          />
        </div>
        <div className="field-row">
          <Field
            number={7}
            coordinates={[-2, 0, 2]}
            value={this.props.state.fieldNumbers[7]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[7]}
            fieldRoadColors={this.props.state.coloredRoads[7]}
            terrain={this.props.state.fieldTerrains[7]}
          />
          <Field
            number={8}
            coordinates={[-1, 0, 1]}
            value={this.props.state.fieldNumbers[8]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[8]}
            fieldRoadColors={this.props.state.coloredRoads[8]}
            terrain={this.props.state.fieldTerrains[8]}
          />
          <Field
            number={9}
            coordinates={[0, 0, 0]}
            value={this.props.state.fieldNumbers[9]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[9]}
            fieldRoadColors={this.props.state.coloredRoads[9]}
            terrain={this.props.state.fieldTerrains[9]}
          />
          <Field
            number={10}
            coordinates={[1, 0, -1]}
            value={this.props.state.fieldNumbers[10]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[10]}
            fieldRoadColors={this.props.state.coloredRoads[10]}
            terrain={this.props.state.fieldTerrains[10]}
          />
          <Field
            number={11}
            coordinates={[2, 0, -2]}
            value={this.props.state.fieldNumbers[11]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[11]}
            fieldRoadColors={this.props.state.coloredRoads[11]}
            terrain={this.props.state.fieldTerrains[11]}
          />
        </div>
        <div className="field-row">
          <Field
            number={12}
            coordinates={[-2, 1, 1]}
            value={this.props.state.fieldNumbers[12]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[12]}
            fieldRoadColors={this.props.state.coloredRoads[12]}
            terrain={this.props.state.fieldTerrains[12]}
          />
          <Field
            number={13}
            coordinates={[-1, 1, 0]}
            value={this.props.state.fieldNumbers[13]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[13]}
            fieldRoadColors={this.props.state.coloredRoads[13]}
            terrain={this.props.state.fieldTerrains[13]}
          />
          <Field
            number={14}
            coordinates={[0, 1, -1]}
            value={this.props.state.fieldNumbers[14]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[14]}
            fieldRoadColors={this.props.state.coloredRoads[14]}
            terrain={this.props.state.fieldTerrains[14]}
          />
          <Field
            number={15}
            coordinates={[1, 1, -2]}
            value={this.props.state.fieldNumbers[15]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[15]}
            fieldRoadColors={this.props.state.coloredRoads[15]}
            terrain={this.props.state.fieldTerrains[15]}
          />
        </div>
        <div className="field-row">
          <Field
            number={16}
            coordinates={[-2, 2, 0]}
            value={this.props.state.fieldNumbers[16]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[16]}
            fieldRoadColors={this.props.state.coloredRoads[16]}
            terrain={this.props.state.fieldTerrains[16]}
          />
          <Field
            number={17}
            coordinates={[-1, 2, -1]}
            value={this.props.state.fieldNumbers[17]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[17]}
            fieldRoadColors={this.props.state.coloredRoads[17]}
            terrain={this.props.state.fieldTerrains[17]}
          />
          <Field
            number={18}
            coordinates={[0, 2, -2]}
            value={this.props.state.fieldNumbers[18]}
            fieldCrossroadColors={this.props.state.coloredCrossroads[18]}
            fieldRoadColors={this.props.state.coloredRoads[18]}
            terrain={this.props.state.fieldTerrains[18]}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.board
});

export default connect(mapStateToProps)(Board);
