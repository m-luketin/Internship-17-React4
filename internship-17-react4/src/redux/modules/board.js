import { utils } from "../../utils";
import { consts } from "../../constants";
import Player from "../../components/Player";

// action types
const HANDLE_ROAD = "HANDLE_ROAD";
const HANDLE_CROSSROAD = "HANDLE_CROSSROAD";

// initial state
let fields = utils.Shuffle(consts.fieldTerrains);
let numbers = utils.AssignNumbers(fields, utils.Shuffle(consts.fieldNumbers));
const initialState = {
  fieldTerrains: fields,
  fieldNumbers: numbers,
  coloredCrossroads: consts.crossroads,
  coloredRoads: consts.roads
};

// action creators
export const handleCrossroad = (
  fieldNumber,
  crossroadNumber,
  coloredCrossroads,
  player
) => dispatchEvent => {
  coloredCrossroads[fieldNumber][crossroadNumber] = consts.players[player];
  dispatchEvent({
    type: HANDLE_CROSSROAD,
    payload: { coloredCrossroads }
  });
};

export const handleRoad = (
  fieldNumber,
  roadNumber,
  coloredRoads,
  player
) => dispatchEvent => {
  console.log(fieldNumber, roadNumber, coloredRoads);
  coloredRoads[fieldNumber][roadNumber] = consts.players[player];
  dispatchEvent({
    type: HANDLE_ROAD,
    payload: { coloredRoads }
  });
  
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ROAD:
      return {
        ...state,
        coloredRoads: action.payload.coloredRoads
      };
    case HANDLE_CROSSROAD:
      return {
        ...state,
        coloredCrossroads: action.payload.coloredCrossroads
      };
    default:
      return { ...state };
  }
};

export default reducer;
