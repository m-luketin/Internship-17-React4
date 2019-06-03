import React from "react";
import Hexagon from "./Hexagon";
import Road from "./Road";
import Crossroad from "./Crossroad";
import Chit from "./Chit";
import { utils } from "../utils";
import {connect} from "react-redux";

const Field = props => {
  return (
    <div className="field">
      <Hexagon color={utils.TerrainToColor(props.terrain)} />
      <Road class="road road-left" coordinates={[-1, 0, 1]} />
      <Road class="road road-top-left" coordinates={[0, -1, 1]} />
      <Road class="road road-top-right" coordinates={[1, -1, 0]} />
      <Road class="road road-right" coordinates={[1, 0, -1]} />
      <Road class="road road-bottom-right" coordinates={[0, 1, -1]} />
      <Road class="road road-bottom-left" coordinates={[-1, 1, 0]} />
      <Crossroad
        class="crossroad crossroad-top"
        coordinates={[0, -1, 0]}
        color={props.fieldCrossroadColors[0]}
        fieldNumber={props.number}
        crossroadNumber={0}
      />
      <Crossroad
        class="crossroad crossroad-top-right"
        coordinates={[1, 0, 0]}
        color={props.fieldCrossroadColors[1]}
        fieldNumber={props.number}
        crossroadNumber={1}
      />
      <Crossroad
        class="crossroad crossroad-bottom-right"
        coordinates={[0, 0, -1]}
        color={props.fieldCrossroadColors[2]}
        fieldNumber={props.number}
        crossroadNumber={2}
      />
      <Crossroad
        class="crossroad crossroad-bottom"
        coordinates={[0, 1, 0]}
        color={props.fieldCrossroadColors[3]}
        fieldNumber={props.number}
        crossroadNumber={3}
      />
      <Crossroad
        class="crossroad crossroad-bottom-left"
        coordinates={[-1, 0, 0]}
        color={props.fieldCrossroadColors[4]}
        fieldNumber={props.number}
        crossroadNumber={4}
      />
      <Crossroad
        class="crossroad crossroad-top-left"
        coordinates={[0, 0, 1]}
        color={props.fieldCrossroadColors[5]}
        fieldNumber={props.number}
        crossroadNumber={5}
      />
      <Chit value={props.value} />
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.board
});


export default connect(mapStateToProps)(Field);
