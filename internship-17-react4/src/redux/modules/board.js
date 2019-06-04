import { utils } from "../../utils";
import { consts } from "../../constants";

// action types
const HANDLE_ROAD = "HANDLE_ROAD";
const HANDLE_CROSSROAD = "HANDLE_CROSSROAD";
const HANDLE_SETUP = "HANDLE_SETUP";

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
  player,
  setup,
  resources,
  settlements
) => dispatchEvent => {
  if (
    (resources[player][0] >= 2 && resources[player][1] >= 2) ||
    (setup && settlements[player] < 2)
  ) {
    //resource req not checked
    coloredCrossroads[fieldNumber][crossroadNumber] = consts.players[player];
    settlements[player]++;
  }
  dispatchEvent({
    type: HANDLE_CROSSROAD,
    payload: { coloredCrossroads, settlements }
  });
};

export const handleRoad = (
  fieldNumber,
  roadNumber,
  coloredRoads,
  player,
  setup,
  resources,
  roads
) => dispatchEvent => {
  if (
    (resources[player][0] >= 2 && resources[player][1] >= 2) ||
    (setup && roads[player] < 2)
  ) {
    //resource req not checked
    coloredRoads[fieldNumber][roadNumber] = consts.players[player];
    roads[player]++;
  }
  dispatchEvent({
    type: HANDLE_ROAD,
    payload: { coloredRoads, roads }
  });
};

export const handleSetup = () => dispatchEvent => {
  dispatchEvent({
    type: HANDLE_SETUP,
    payload: {}
  });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ROAD:
      return {
        ...state,
        coloredRoads: action.payload.coloredRoads,
        roads: action.payload.roads
      };
    case HANDLE_CROSSROAD:
      return {
        ...state,
        coloredCrossroads: action.payload.coloredCrossroads,
        settlements: action.payload.settlements
      };
    case HANDLE_SETUP:
      return {
        ...state
      };
    default:
      return { ...state };
  }
};

export default reducer;
